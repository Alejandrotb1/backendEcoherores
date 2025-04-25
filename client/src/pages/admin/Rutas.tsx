import React, { useState, useCallback } from 'react';
import { Calendar, dateFnsLocalizer, View, Components, EventWrapperProps, DateCellWrapperProps } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Map from '../../components/Map/Map';

// Estilos personalizados usando CSS en línea para asegurar que se apliquen
const customStyles = {
  calendar: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '2px solid #BBF7D0'
  },
  // Estilos base para celdas
  baseCell: {
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    transition: 'all 0.2s',
  },
  // Barra de herramientas
  toolbar: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    border: '1px solid #BBF7D0',
  },
  toolbarButton: {
    backgroundColor: 'white',
    color: '#374151',
    border: '2px solid #BBF7D0',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    transition: 'all 0.2s',
    margin: '0 0.25rem',
    cursor: 'pointer',
  },
  toolbarButtonActive: {
    backgroundColor: '#059669',
    color: 'white',
    border: '2px solid #059669',
  },
  // Eventos
  event: {
    backgroundColor: '#059669',
    border: '1px solid #047857',
    color: 'white',
    borderRadius: '0.375rem',
    padding: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: '#047857',
      transform: 'translateY(-1px)',
    },
  },
  // Vista de mes
  monthCell: {
    backgroundColor: 'white',
    transition: 'all 0.2s',
    minHeight: '120px',
    padding: '0.5rem',
    position: 'relative' as const,
    border: 'none'
  },
  monthHeader: {
    backgroundColor: '#F0FDF4',
    padding: '0.75rem',
    color: '#374151',
    fontWeight: '600',
    fontSize: '0.875rem',
    textTransform: 'uppercase' as const,
    textAlign: 'center' as const,
    borderBottom: 'none'
  },
  // Vista de semana y día
  timeCell: {
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    transition: 'all 0.2s',
    padding: '0.25rem',
    borderBottom: '1px solid #E5E7EB',
  },
  timeGutter: {
    backgroundColor: '#F0FDF4',
    padding: '0.5rem',
    textAlign: 'right' as const,
    color: '#374151',
    fontWeight: '500',
    fontSize: '0.875rem',
    borderRight: '2px solid #BBF7D0',
  },
  timeHeader: {
    backgroundColor: '#F0FDF4',
    padding: '0.75rem',
    borderBottom: '2px solid #BBF7D0',
    color: '#374151',
    fontWeight: '600',
    fontSize: '0.875rem',
  },
  // Vista de agenda
  agendaCell: {
    padding: '1rem',
    borderBottom: '1px solid #E5E7EB',
    color: '#374151',
    fontSize: '0.875rem',
  },
  agendaHeader: {
    backgroundColor: '#F0FDF4',
    padding: '1rem',
    fontWeight: '600',
    color: '#374151',
    borderBottom: '2px solid #BBF7D0',
  },
  // Elementos comunes
  today: {
    backgroundColor: '#F0FDF4',
    border: '2px solid #059669',
    borderRadius: '4px'
  },
  dateNumber: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem',
    width: '100%',
    textAlign: 'center' as const
  },
  currentTimeIndicator: {
    backgroundColor: '#DC2626',
    height: '2px',
    position: 'absolute' as const,
    left: 0,
    right: 0,
    zIndex: 1,
  },
};

const locales = {
  'es': es,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => {
    return 1; // Lunes
  },
  getDay: (date: Date) => {
    const day = getDay(date);
    return day === 0 ? 6 : day - 1; // Convierte domingo (0) a 6 y resta 1 a los demás días
  },
  locales,
});

interface Evento {
  id: number;
  title: string;
  start: Date;
  end: Date;
  ubicacion?: {
    lat: number;
    lng: number;
  };
}

const Rutas = () => {
  const [events, setEvents] = useState<Evento[]>([
    {
      id: 1,
      title: 'Ruta de Recojo #1',
      start: new Date(2024, 3, 20, 10, 0),
      end: new Date(2024, 3, 20, 12, 0),
      ubicacion: {
        lat: 4.7109,
        lng: -74.0721
      }
    },
    {
      id: 2,
      title: 'Ruta de Recojo #2',
      start: new Date(2024, 3, 21, 14, 0),
      end: new Date(2024, 3, 21, 16, 0),
      ubicacion: {
        lat: 4.7209,
        lng: -74.0821
      }
    },
  ]);

  const [view, setView] = useState<View>('month');
  const [date, setDate] = useState(new Date()); // Usar la fecha actual
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null);

  const handleNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const handleViewChange = useCallback((newView: View) => {
    setView(newView);
  }, []);

  const handleSelectEvent = useCallback((event: Evento) => {
    setSelectedEvent(event);
  }, []);

  const handleLocationSelect = (location: { lat: number; lng: number }) => {
    if (selectedEvent) {
      setEvents(prevEvents => 
        prevEvents.map(event => 
          event.id === selectedEvent.id 
            ? { ...event, ubicacion: location }
            : event
        )
      );
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  // Componentes personalizados tipados
  const components: Components<Evento, object> = {
    toolbar: (props: any) => (
      <div style={customStyles.toolbar} className="flex justify-between items-center">
        <div>
          <button
            onClick={() => props.onNavigate('PREV')}
            style={customStyles.toolbarButton}
          >
            Anterior
          </button>
          <button
            onClick={() => props.onNavigate('TODAY')}
            style={{
              ...customStyles.toolbarButton,
              ...(isToday(props.date) ? customStyles.toolbarButtonActive : {})
            }}
          >
            Hoy
          </button>
          <button
            onClick={() => props.onNavigate('NEXT')}
            style={customStyles.toolbarButton}
          >
            Siguiente
          </button>
        </div>
        <span className="text-xl font-bold text-gray-800">
          {props.label}
        </span>
        <div>
          {['month', 'week', 'day', 'agenda'].map((viewOption: string) => (
            <button
              key={viewOption}
              onClick={() => props.onView(viewOption as View)}
              style={{
                ...customStyles.toolbarButton,
                ...(props.view === viewOption ? customStyles.toolbarButtonActive : {})
              }}
            >
              {viewOption === 'month' ? 'Mes' :
               viewOption === 'week' ? 'Semana' :
               viewOption === 'day' ? 'Día' :
               'Agenda'}
            </button>
          ))}
        </div>
      </div>
    ),
    eventWrapper: (props: EventWrapperProps<Evento>) => (
      <div
        style={{
          ...customStyles.event,
          width: '100%',
          height: '100%'
        }}
      >
        {props.event.title}
      </div>
    ),
    timeSlotWrapper: ({ children }: { children?: React.ReactNode }) => (
      <div style={customStyles.timeCell}>
        {children}
      </div>
    ),
    dateCellWrapper: (props: DateCellWrapperProps) => {
      const isCurrentDay = format(props.value, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
      return (
        <div
          style={{
            ...customStyles.monthCell,
            backgroundColor: isCurrentDay ? '#F0FDF4' : 'white',
            position: 'relative',
            height: '100%'
          }}
        >
          {props.children}
          {isCurrentDay && (
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                backgroundColor: '#059669',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                zIndex: 1
              }}
            >
              {props.value.getDate()}
            </div>
          )}
        </div>
      );
    },
    month: {
      header: ({ date, label }: { date: Date; label: string }) => (
        <div style={customStyles.monthHeader}>
          {label}
        </div>
      ),
      dateHeader: ({ date, label }: { date: Date; label: string }) => {
        const isCurrentDay = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
        if (isCurrentDay) {
          return null; // No mostramos el número aquí si es el día actual
        }
        return (
          <div style={customStyles.dateNumber}>
            {label}
          </div>
        );
      },
      event: (props: { event: Evento }) => (
        <div style={customStyles.event} title={props.event.title}>
          {props.event.title}
        </div>
      )
    },
    timeGutterHeader: () => (
      <div style={customStyles.timeHeader}>Hora</div>
    ),
    timeGutterWrapper: ({ children }: { children?: React.ReactNode }) => (
      <div style={customStyles.timeGutter}>
        {children}
      </div>
    ),
  };

  return (
    <div className="p-8 bg-gradient-to-br from-green-50 via-white to-green-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Calendario de Rutas de Recojo
        </h1>
        <p className="text-gray-600 text-lg">Gestiona y visualiza todas las rutas programadas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
          <style>
            {`
              .rbc-calendar {
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
              }
              .rbc-month-view {
                border: 1px solid #E5E7EB40 !important;
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
              }
              .rbc-month-row {
                border: none !important;
                min-height: 110px !important;
              }
              .rbc-month-row + .rbc-month-row {
                border-top: 1px solid #E5E7EB40 !important;
              }
              .rbc-day-bg {
                border-right: 1px solid #E5E7EB40 !important;
              }
              .rbc-day-bg:last-child {
                border-right: none !important;
              }
              .rbc-header {
                font-weight: 500 !important;
                padding: 12px !important;
                text-transform: uppercase !important;
                font-size: 0.8rem !important;
                color: #374151 !important;
                background-color: #F0FDF4 !important;
                border-bottom: 1px solid #E5E7EB40 !important;
                text-align: center !important;
              }
              .rbc-header + .rbc-header {
                border-left: 1px solid #E5E7EB40 !important;
              }
              .rbc-date-cell {
                text-align: left !important;
                padding: 8px !important;
                font-size: 0.85rem !important;
                color: #374151 !important;
                position: relative !important;
              }
              .rbc-date-cell > a {
                padding-left: 8px !important;
                padding-top: 4px !important;
              }
              .rbc-off-range {
                color: #9CA3AF !important;
              }
              .rbc-off-range-bg {
                background-color: white !important;
              }
              .rbc-today {
                background-color: #F0FDF4 !important;
              }
              .rbc-now {
                position: relative !important;
              }
              .rbc-now .rbc-button-link {
                position: absolute !important;
                left: 8px !important;
                top: 4px !important;
                background-color: #059669 !important;
                color: white !important;
                width: 24px !important;
                height: 24px !important;
                border-radius: 50% !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-weight: 500 !important;
              }
              .rbc-event {
                background-color: #059669 !important;
                border: none !important;
                border-radius: 4px !important;
                padding: 2px 4px !important;
                font-size: 0.75rem !important;
                margin: 1px 2px !important;
              }
              .rbc-event-content {
                white-space: nowrap !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                font-weight: 500 !important;
              }
              .rbc-row-segment {
                padding: 0 1px !important;
              }
              .rbc-show-more {
                color: #059669 !important;
                font-size: 0.75rem !important;
                font-weight: 500 !important;
                padding: 2px 4px !important;
                background: transparent !important;
              }
              .rbc-row-content {
                margin-top: 28px !important;
              }
              .rbc-toolbar {
                margin-bottom: 1rem !important;
              }
              .rbc-toolbar button {
                color: #374151 !important;
                border: 1px solid #E5E7EB !important;
                padding: 6px 12px !important;
                font-size: 0.875rem !important;
                border-radius: 6px !important;
                background-color: white !important;
              }
              .rbc-toolbar button.rbc-active {
                background-color: #059669 !important;
                color: white !important;
                border-color: #059669 !important;
              }
              .rbc-toolbar-label {
                font-size: 1rem !important;
                font-weight: 500 !important;
                color: #374151 !important;
              }
            `}
          </style>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ 
              height: '700px',
              width: '100%'
            }}
            className="custom-calendar"
            components={components}
            culture="es"
            view={view}
            onView={handleViewChange}
            date={date}
            onNavigate={handleNavigate}
            onSelectEvent={handleSelectEvent}
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              noEventsInRange: "No hay rutas programadas",
              allDay: "Todo el día",
              date: "Fecha",
              time: "Hora",
              event: "Ruta",
              showMore: total => `+ Ver ${total} más`
            }}
            views={['month', 'week', 'day', 'agenda']}
            defaultView="month"
          />
        </div>

        {/* Mapa y Detalles */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-green-200">
              Ubicación de Rutas
            </h2>
            <Map onLocationSelect={handleLocationSelect} />
          </div>
          
          {selectedEvent && (
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b-2 border-green-200 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold border border-green-300">
                    Activa
                  </span>
                </div>
                
                <div className="flex items-start space-x-4 text-gray-700">
                  <div className="bg-green-100 p-3 rounded-xl border border-green-300">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 mb-1">Horario</p>
                    <p className="text-sm bg-green-50 p-2 rounded-lg border border-green-200">
                      {format(selectedEvent.start, 'PPpp', { locale: es })} - {format(selectedEvent.end, 'p', { locale: es })}
                    </p>
                  </div>
                </div>

                {selectedEvent.ubicacion && (
                  <div className="flex items-start space-x-4 text-gray-700">
                    <div className="bg-green-100 p-3 rounded-xl border border-green-300">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 mb-1">Ubicación</p>
                      <div className="space-y-1">
                        <p className="text-sm bg-green-50 p-2 rounded-lg border border-green-200">
                          Latitud: {selectedEvent.ubicacion.lat.toFixed(6)}
                        </p>
                        <p className="text-sm bg-green-50 p-2 rounded-lg border border-green-200">
                          Longitud: {selectedEvent.ubicacion.lng.toFixed(6)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-6 pt-4 border-t-2 border-green-200">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-bold">
                    Editar Ruta
                  </button>
                  <button className="flex-1 px-6 py-3 bg-white text-gray-700 border-2 border-green-300 rounded-xl hover:bg-green-50 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl font-bold">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rutas; 
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core/index.js';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/dispatch';
import { useMount } from '../../hooks/useMount';
import { fetchHolidays } from '../../store/holidays/holidays.slice';
import { RootState } from '../../store';
import { IEventContent } from '../../types';
import { Modal } from '../Modal';
import { ModalDelete } from '../ModalDelete';
import { SmoothWrapper } from '../common/SmoothWrapper';
import { CalendarWrapperStyled } from './styles';

const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | undefined>();
  const [eventClickInfo, setEventClickInfo] = useState<EventClickArg | undefined>();
  const holidays = useSelector((state: RootState) => state.holidaysReducer);
  const dispatch = useAppDispatch();

  useMount(() => {
    // Temp hardcoded country code
    dispatch(fetchHolidays('UA'));
  });

  const state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  // It will be hook or helper
  const getHolidaysEvents = () => {
    const events = holidays.holidays.map((holiday) => {
      return {
        id: holiday.date,
        title: holiday.name,
        start: holiday.date,
      };
    });

    return events;
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectInfo(selectInfo);
    setModalVisible(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    setEventClickInfo(clickInfo);
    setDeleteModalVisible(true);
  };

  return (
    <CalendarWrapperStyled id="calendar">
      <SmoothWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          select={handleDateSelect}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={getHolidaysEvents()}
          eventContent={renderEventContent}
          weekends={state.weekendsVisible}
          eventClick={handleEventClick}
          height={'80vh'}
          firstDay={1}
          // Need it for mobile devices (for touch). Please, see this: https://stackoverflow.com/questions/40626776/fullcalendar-select-callback-not-firing-in-mobile
          selectLongPressDelay={0.1}
        />
        {modalVisible && selectInfo && (
          <Modal handleCloseModal={setModalVisible} isShow={modalVisible} selectInfo={selectInfo} />
        )}
        {deleteModalVisible && eventClickInfo && (
          <ModalDelete
            eventClickInfo={eventClickInfo}
            isShow={deleteModalVisible}
            handleCloseModal={setDeleteModalVisible}
          />
        )}
      </SmoothWrapper>
    </CalendarWrapperStyled>
  );
};

function renderEventContent(eventInfo: IEventContent) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;

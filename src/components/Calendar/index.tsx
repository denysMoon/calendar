import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core/index.js';
import { INITIAL_EVENTS } from '../../utils/calendarEvents';
import { IEventContent } from '../../types';
import { Modal } from '../Modal';
import { ModalDelete } from '../ModalDelete';
import { CalendarWrapperStyled } from './styles';

// firstDay and other options will be stored with redux (and some in localstorage)

const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | undefined>();
  const [eventClickInfo, setEventClickInfo] = useState<EventClickArg | undefined>();

  const state = {
    weekendsVisible: true,
    currentEvents: [],
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
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        select={handleDateSelect}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={INITIAL_EVENTS}
        eventContent={renderEventContent}
        weekends={state.weekendsVisible}
        eventClick={handleEventClick}
        height={'600px'}
        firstDay={1}
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

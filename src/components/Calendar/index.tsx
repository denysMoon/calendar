import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, handleEventClick } from '../../utils/calendarEvents';
import { IEventContent } from '../../types';
import { useState } from 'react';
import { Modal } from '../Modal';
import { DateSelectArg } from '@fullcalendar/core/index.js';

export const Calendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectInfo, setSelectInfo] = useState<DateSelectArg | undefined>();

  const state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectInfo(selectInfo);
    setModalVisible(true);
  };

  return (
    <>
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
      />
      {modalVisible && selectInfo && (
        <Modal handleCloseModal={setModalVisible} isShow={modalVisible} selectInfo={selectInfo} />
      )}
    </>
  );
};

function renderEventContent(eventInfo: IEventContent) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

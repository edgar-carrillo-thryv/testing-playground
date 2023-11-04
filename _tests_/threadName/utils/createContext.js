export const createContext = ({ firstName, lastName, email, phoneNumber }) => {
  return {
    arguments: {},
    source: {
      body: 'ryan.cantor@thryv.com',
      vclientid: 'tiype2vo6dz8oabe',
      gmt: 1695661973000,
      threadpk: 'ODUyYTE0NzktOWY2My00ZTljLWFhMzQtNDUzYmZjZWZlMTE4',
      message_time: 1695661973000,
      read_time: 1695661973000,
      sk1: 1691109226000,
      com_ctr_id: 'CC_BA266E9D',
      completedsk: 1698416220317,
    },
    result: {
      items: [
        {
          item_type: 'CONTACT',
          pk1: 'CC_BA266E9D#CONTACT',
          sk1: 1690863269166,
          contactsk2: email, // EMAIL
          contactsk3: phoneNumber, // PHONE NUMBER
          body: JSON.stringify({
            id: 'tiype2vo6dz8oabe',
            account_id: '308xtxvf8h562tx4',
            object: 'contact',
            given_name: firstName,
            middle_name: '',
            surname: lastName,
            picture_url: '',
            nickname: '',
            birthday: '',
            company_name: '',
            job_title: '',
            manager_name: '',
            office_location: [{ email: 'ryan.cantor@thryv.com', type: '' }],
            emails: [{ email: 'ryan.cantor@thryv.com', type: '' }],
            phone_numbers: '',
            notes: [],
            im_addresses: [],
            physical_addresses: [],
            web_pages: [],
            groups: 'inbox',
            source: 'inbox',
          }),
          ts: '2023-08-01T04:14:29.166Z',
          contactsk1: 'ODUyYTE0NzktOWY2My00ZTljLWFhMzQtNDUzYmZjZWZlMTE4', // THREADID
        },
      ],
      scannedCount: 1,
    },
    stash: {},
    outErrors: [],
  }
}

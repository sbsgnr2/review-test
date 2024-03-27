import { optionsMicrosurvey, optionsTemplate } from '@/mocks/composeForm';
import { create } from 'zustand';

const initialState = {
  isRecipients: true,
  template: optionsTemplate[0].value,
  microSurvey: optionsMicrosurvey[0].value,
  name: 'Jhony Chu',
  email: 'ask@wantyourfeedback.com',
  emailTo: 'jhony@plazah.com',
  subject: 'We Want Your Feedback',
  topMessage: '',
  bottomMessage: '',
  isAllowSmsRec: false,
  format: 'email',
  locations: [],
  message: "Thanks for visiting Clutch Automotive! We'd love your feedback to improve your experience next time",
}

export const useCampaigns = create((set: any, get: any) => ({
  isRecipients: true,
  template: optionsTemplate[0].value,
  microSurvey: optionsMicrosurvey[0].value,
  name: 'Jhony Chu',
  email: 'ask@wantyourfeedback.com',
  emailTo: 'jhony@plazah.com',
  subject: 'We Want Your Feedback',
  topMessage: '',
  bottomMessage: '',
  isAllowSmsRec: false,
  format: 'email',
  message: "Thanks for visiting Clutch Automotive! We'd love your feedback to improve your experience next time",
  locations: [],
  handleOption: (value: boolean) => set(() => ({ isRecipients: value })),
  handleTemplate: (selectedValue: string) => set(() => ({ template: selectedValue, topMessage: '', bottomMessage: '', message: '' })),
  handleMicrosurvey: (selectedValue: string) => set(() => ({ microSurvey: selectedValue })),
  handleTopMessage: (selectedValue: string) => set(() => ({ topMessage: selectedValue })),
  handleBottomMessage: (selectedValue: string) => set(() => ({ bottomMessage: selectedValue })),
  handleName: (event: React.ChangeEvent<HTMLInputElement>) => set(() => ({ name: event.target.value })),
  handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => set(() => ({ email: event.target.value })),
  handleEmailTo: (event: React.ChangeEvent<HTMLInputElement>) => set(() => ({ emailTo: event.target.value })),
  handleSubject: (event: React.ChangeEvent<HTMLInputElement>) => set(() => ({ subject: event.target.value })),
  handleAllowSmsRec: (value: boolean) => set(() => ({ isAllowSmsRec: value })),
  handleMessage: (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= 160) {
      set(() => ({ message: event.target.value }));
    }
  },
  handleFormat: (event: React.ChangeEvent<HTMLInputElement>) => set(() => ({ ...initialState, format: event.target.value })),
  handleLocations: (values: any[]) => set(() => ({ locations: values })),
}));

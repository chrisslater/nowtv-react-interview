import { getMessages, getMembers } from './data';

export function getMembersList() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  }
}

export default function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}
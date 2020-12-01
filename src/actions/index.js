
export const conversationChanged = conversationId => ({
   type: 'SELECTED_CONVERSATION_CHANGED',
   conversationId
});  

export const newMessageAdded = (textMessage) => ({
   type: 'NEW_MESSAGE_ADDED',
   textMessage
});

export const conversationDeleted = () => ({
   type: 'DELETE_CONVERSATION',
});
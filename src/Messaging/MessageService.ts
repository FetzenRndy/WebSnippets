import MessageSender = chrome.runtime.MessageSender;

export type ResponseCallback = (response: any) => void;

export type MessageResponseCallback = (
	request: any,
	sender: MessageSender,
	sendResponse: ResponseCallback
) => void;

export class MessageService {
	static content = class {
		public static emitToBackground(
			payload: any,
			responseCallback: MessageResponseCallback
		) {
			chrome.runtime.sendMessage(payload, responseCallback);
		}
	};

	static popup = MessageService.content;

	static background = class {
		public static emitToActiveTab(
			payload: any,
			responseCallback: ResponseCallback
		) {
			chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
				chrome.tabs.sendMessage(
					tabs[0].id as number,
					payload,
					responseCallback
				);
			});
		}
	};

	public static addListener(listener: MessageResponseCallback) {
		chrome.runtime.onMessage.addListener(listener);
	}
}

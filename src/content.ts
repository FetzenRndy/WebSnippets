import { MessageService } from "./Messaging/MessageService";
import {isTextBox} from "./Abstractions/DOM";

// Current implementation, may not be the most performance friendly :/
document.addEventListener("keyup", () => {
	if(!isTextBox(document.activeElement)) {
		return;
	}

	const activeElement = document.activeElement as HTMLInputElement;
	MessageService.content.emitToBackground(
		{
			type: "parse",
			text: activeElement.value,
		},
		response => {
			console.log(response);
			activeElement.value = response.text;
		}
	);
});

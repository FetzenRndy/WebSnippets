import { SnippetParser } from "./Parsing/SnippetParser";
import { Snippet } from "./Models/Snippet";
import {MessageService} from "./Messaging/MessageService";

const snippetParser = new SnippetParser();
snippetParser.registerSnippet(new Snippet("$test", "This is a test"));

MessageService.addListener((request, sender, sendResponse) => {
	switch(request.type) {
		case "parse":
			sendResponse({
				text: snippetParser.replaceKeywords(request.text),
			});
			break;
	}
});

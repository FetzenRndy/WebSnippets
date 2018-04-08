import { SnippetParser } from "./Parsing/SnippetParser";
import { Snippet } from "./Models/Snippet";
import { MessageService } from "./Messaging/MessageService";

const snippetParser = new SnippetParser();

snippetParser.registerSnippet(new Snippet("$test", "TEST SNIPPET INSERTED"));
snippetParser.registerSnippet(new Snippet("$p", "PogChamp"));

window.debug = snippetParser;

MessageService.addListener((request, sender, sendResponse) => {
	switch (request.type) {
		case "parse":
			sendResponse({
				text: snippetParser.replaceKeywords(request.text)
			});
			break;
		case "addSnippet":
			console.log(request.snippet);
			snippetParser.registerSnippet(request.snippet);
			sendResponse({
				success: true
			});
			break;
	}
});

import {SnippetParser} from "../SnippetParser";
import {Snippet} from "../../Models/Snippet";

describe('The snippet parser', () => {

	let parser: SnippetParser;

	beforeEach(() => {
		parser = new SnippetParser();
		parser.registerSnippet(new Snippet("$test", "wired"));
	});

	it('should replace snippet keywords with the snippets content', () => {
		const originalText = "This is a $test text";
		const parsedText = parser.replaceKeywords(originalText);

		expect(parsedText).toContain("wired");
		expect(parsedText).not.toContain("$test");
	});

	it("should not add trailing spaces", () => {
		const originalText = "This is a normal text";
		const parsedText = parser.replaceKeywords(originalText);

		expect(parsedText[parsedText.length - 1]).not.toEqual(" ");
	});
});

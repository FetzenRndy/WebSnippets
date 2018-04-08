import { Snippet } from "../Models/Snippet";

export class SnippetParser {
	private snippets: Snippet[];

	constructor() {
		this.snippets = [];
	}

	/**
	 * Replaces the keywords of all registered snippets with the content of the snippet.
	 */
	public replaceKeywords(text: string) {
		const words = text.split(" ");
		let returnText = "";

		// IDEA: Can be made more efficient by tracking the words and then checking the text until the last space.
		for (const word of words) {
			for (const snippet of this.snippets) {
				if (word === snippet.keyword) {
					// Add the keyword content instead of the word to the result
					returnText += snippet.content + " ";
					break;
				} else if(this.snippets[this.snippets.length - 1] === snippet) {
					// Make sure we do not add a trailing space.
					if (words[words.length - 1] === word) {
						returnText += word;
						break;
					}

					// Add the non keyword to the result
					returnText += word + " ";
				}
			}
		}

		return returnText;
	}

	/**
	 * Registers a snippet, which will then be recognized when parsing a text.
	 */
	public registerSnippet(snippet: Snippet) {
		this.snippets.push(snippet);
	}
}

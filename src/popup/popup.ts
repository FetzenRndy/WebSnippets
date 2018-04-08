import * as $ from "jquery";

import {Snippet} from "../Models/Snippet";
import {MessageService} from "../Messaging/MessageService";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

$("document").ready(function(){
	document.getElementById("addSnippetForm")!.addEventListener("submit", e => {
		debugger;
		e.preventDefault();

		const keyword = document.getElementById("keywordInput") as HTMLInputElement;
		const content = document.getElementById("contentInput") as HTMLInputElement;

		MessageService.popup.emitToBackground(
			{
				type: "addSnippet",
				snippet: new Snippet(keyword.value, content.value)
			},
			() => {
				$(function () {
					$("#snippetButton").popover();
				});

				keyword.value = "";
				content.value = "";
			}
		)
	});
});


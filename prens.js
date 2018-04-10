// prens.js Presentations for a bth webbapp-course

"use strict";

var prens = (function () {

    var kmom01 = {title: "kmom01",
		  qns: ["Är du sedan tidigare bekant med utveckling av mobila appar?",
			"Vilket är den viktigaste lärdomen du gjort om typografi för mobila enheter?", 
			"Hur jag valde mina typsnitt",
			"Du har i kursmomentet hämtat data från två stycken API, hur kändes detta?",
		       "Min TIL för detta kmom01"],
		  answs: ["Nix, bara vårt verktyg vi har på jobbet, där har man fått vara med och tycka till vid vidareutveckling samt läst en del forumtrådar om buggar, problem och fixar; så jag har inte gjort det hands-on tidigare, men känner mig ändå bekant med områdets olika problematiker.", 
			  "Egentligen har jag inte behövt lära mig så mycket, jag har vid tidigare uppgifter redan förstått att jag har rätt så hyfsad känsla för den visuella layouten samt redan tidigare snokat lite i artiklar om typografi och layout; och där har jag fått bekräftat att min känsla håller rätt långt.</p><p>Det jag lärt mig om typografi, dock inte för mobila enheter, är att man tydligen anser att ett sans serif typsnitt är mera lättläst på dataskärmen än ett serif typsnitt. Jag tror att det är en förenkling, det finns ju stora och små serifer och typsnitt med många eller få glyfer med serifer, så det som gäller är att man faktiskt implementerar typsnittet, tar ett steg tillbaka, tittar på helheten, sedan tar ett steg framåt igen och försöker läsa, och sen bildar man sig en uppfattning.",
			  "Sedan övnings-appen hade jag standard-typsnitten courier och arial. Jag tyckte att dessa var bra för MeAppen, jag vill göra nedskalad programmvara, det ska inte vara så fancy så att det tar tid att hämta eller går sönder lätt. Courier-stilen passar för att det påminner om terminal-typsnitt, dvs lämpligt för text som läses av datafolk, och det gav också en arbetar-känsla som passar till järnvägsanknytningen som är en stor del av mig och var en självklar fond i form av bakgrundsbild för min app.</p><p>För navigationsmenyn ville jag ha något som ändå ser tidsenligt ut för app-eran vi lever i, dvs inga serifer, även inga serifer just för att det inte är löp-text utan bara enskilda ord. Men Lucida console tar vid med konsol/terminal-känslan, så den lirar bra ihop med courier.</p><p>I typografiövningen letade jag länge och med olika idéer. Jag ville få till en handskriven stil, så att det blir som ett skolarbete, frågorna på ett kopierat papper, och svaren tydligt skrivna av en elev. Men naturligtvis är handwriting-fonter inte så värst bra för mycket text, kanske på en blogg med blahablaha, men inte en text som man ska kunna följa en röd tråd i och hoppa fram och tillbaka för att dubbelkolla saker. Men det finns ju en hel uppsjö av serif-stilar att välja bland, några var lite för kursiva och påminde om data-kursivt, men några kändes mer personligt kursiva, eller personligt serifade. Men till slut fastnade jag ändå för en ganska konventionell serif-stil, gurjada, och det som passar bra med den är att den är lätt, dvs tunn, så brödtexten slår inte ihjäl läsaren</p><p>För rubrikerna valde jag mate, och det var ett kombinationsval med gurajada. Jag hade laddat ett femtontal typsnitt, tio för rubriken, fem för brödtexten och kryssade av och på i firefox-debuggern, och när jag kryssade på mate så blev känslan så bra. Jag fick minska radavståndet till 0.9 för att det skulle se vettigt ut.</p><p>Nu är det skolprovskänsla på så sätt att det är ett typsnitt med officiell, brandad känsla i frågorna och ett konventionellt typsnitt som kreti och pleti ser ut att kunna ha på mormors hemdator i word 5.0 i svaren.</p><p>Som en quickfix för att testa arkitekturen körde jag röd bakgrund på det aktiva nav-elementet. Tänkte ändra det sen till något mer genomtänkt, men när jag fipplat med bakgrunden till hela nav-baren så tycker jag att det röda ser perfekt ut. Det harmoniserar med bakgrundsbildens varma känsla, det är verkligen tydligt och det förstärker den tidsenliga moderna känslan jag ville ha i nav-baren, samtidigt är det avskalad och enkelt.",
			  "Öh, med det ena menas gitHub, med det andra menas google-fonts? Eller menade ni de två olika sätten att hämta, request och fetch? </p><p>För google-fonts var ju inte mycket att ta ställning till, det är ju bara en länk som innehåller ordet api =) Den mest påtagliga känslan jag får där är ju google = imperium. Men jag läste också att man inte blir spårad i alla fall om man använder typsnitten eller går in på en sida som använder dem, så det är ju lite bra i alla fall. </p><p>Vad gäller github så fick jag skapa några repos först =) Det var lärorikt att göra detta; vi har ju jobbat med api:er på tidigare kurser fast jag inte har gjort alla dessa kursmoment, så nu var det dags. </p><p>Jag tyckte om båda sätten; request kändes mer som en befästning av javascript-kunskaper där man känner igen syntaxen sen tidigare. Fetch kändes så klart himla smart, fast jag vet inte om det blev nämnvärt mindre kod, eller tydligare kod, måste prova fler gånger för att fastna för endera sätten.",
			 "Det gick upp för mig att jag hade ganska lätt att fatta, skriva ihop och avlusa koden. När det blev fel i webbläsaren förstod jag nästan allid genast vad det var, det var sällan strukturfel och när det var det, så såg jag direkt på felsymptomet var i koden jag hade tänkt fel. Så min samlade mängd av programmeringsövningar från studier längre tillbaks i tiden och från i höstas har ändå satt sig i ryggmärgen. En gång tänkte jag att jag inte ville bli datavetare för att det handlade om att leta fel hela tiden. Men jag har en mera nyanserad syn på det nu. Det har rört sig mer mot att avhjälpa fel i alla fall."]};
    console.log("done defining kmom01");
    var kmom02 = {title: "kmom02",
		  qns: ["one?", "two?", "three?"],
		  answs: ["raz.", "dva.", "tri."]};

    var moms = [kmom01, kmom02];



    
    var makeView = function () {

	moms.forEach(function(mom){
	    var momContainer = document.createElement("div");
	    var momTitle = document.createElement("h2");
	    momTitle.innerHTML = mom.title;
	    momContainer.appendChild(momTitle);
	    mom.qns.forEach(function(qn){
		var momQn = document.createElement("h4");
		momQn.innerHTML = qn;
		momContainer.appendChild(momQn);
		var momAns = document.createElement("p");
		momAns.innerHTML = mom.answs[mom.qns.indexOf(qn)];
		momContainer.appendChild(momAns);
	    });
	    window.mainContainer.appendChild(momContainer);
	}); // make a momcontainer with title etc
	
	
    };


    
    return {
	makeView: makeView
    };

    
})(prens);

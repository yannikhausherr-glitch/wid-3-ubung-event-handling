# Übung WID 3 - Event Handling
In dieser Übung wollen wir einige Event Handler / Handler kennen lernen und schauen, wie diese auf Interaktion reagieren. Nutze die App.js um deinen Code zu schreiben und öffne die Browser Konsole um das Ergebnis vom jeweiligen console.log() zu sehen.


## Aufgabe 1: Button
- Schreibe ein Button Element, gib diesem einen Text (z.B. "Klick mich") sowie ein id-Attribut (mit beliebigem String als Wert).
- Füge dem Button ein "onClick" Event Handler hinzu. Event Handler werden wie Attribute ins Start Tag des jeweiligen Elements geschrieben und verwenden Klammern `{}`.
- Der Event Handler soll die Funktion `(e) => console.log(e.target.id)` aufrufen. Du kannst entweder diese anonyme Arrow Funktion verwenden oder aber eine eigene Funktion definieren (VOR dem Return-Statement) und sie hier verwenden.
- Prüfe mithilfe der Browser Konsole ob die Button id mit jedem Klick emittiert wird.
- Ändere in `(e) => console.log(e.target.id)` "id" zu "value". Wird bei einem Klick in der Browser Konsole ein Wert angezeigt?  Warum / warum nicht?
- Füge dem Button zwei weitere Event Handler "onMouseEnter" und "onMouseLeave" hinzu. Beide erwarten wieder eine Funktion. Die Funktion soll einen beliebigen String in die Konsole drucken - du brauchst das Event Objekt nicht.
- Wird deine Mausbewegungen in und aus dem Button heraus registriert und wird etwas in die Konsole geschrieben?
// Mein String wird geschrieben


## Aufgabe 2: Checkbox
- Schreibe ein "input" Element, gibt diesem das Attribut `type="checkbox"` Logge `e.target.checked` mit Hilfe eines "onChange" (nicht: "onClick") EventHandlers. Was wird in der Konsole angezeigt?
// True oder False, je nachdem ob die Checkbox angeklickt wurde oder nicht.

## Aufgabe 3: Textfeld
- Schreibe ein "input" Element, gib diesem das Attribut `type="text"`. Füge den Event Handler "onKeyDown" hinzu. Logge e.key  (anstatt e.target.value). Was wird geloggt, wenn du im Textfeld schreibst und dann "Enter" drückst?
// die Taste "Enter" wird geloggt, da e.key den Wert der gedrückten Taste zurückgibt.

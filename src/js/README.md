## Links
[Timer Links](../../dev_modules/@ocdla/Timer/README.md)<br>
[Main](../../README.md)


<a name="Controller"></a>

## Controller
Controller class that manages the timer, API,  displaying interactions.

**Kind**: global class  

* [Controller](#Controller)
    * [.clock](#Controller+clock) : <code>Element</code>
    * [.api](#Controller+api) : <code>Api</code>
    * [.getapi()](#Controller+getapi)
    * [.getUserInput(id)](#Controller+getUserInput) ΓçÆ <code>number</code>
    * [.startTimer()](#Controller+startTimer)
    * [.addEventHandlers()](#Controller+addEventHandlers)
    * [.handleEvent(e)](#Controller+handleEvent)

<a name="Controller+clock"></a>

### controller.clock : <code>Element</code>
Root element where the clock is displayed.

**Kind**: instance property of [<code>Controller</code>](#Controller)  
<a name="Controller+api"></a>

### controller.api : <code>Api</code>
Api instance used to fetch data

**Kind**: instance property of [<code>Controller</code>](#Controller)  
<a name="Controller+getapi"></a>

### controller.getapi()
Asynchronously fetches data from the API and renders it.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+getUserInput"></a>

### controller.getUserInput(id) ΓçÆ <code>number</code>
Get user input from an input element by ID.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
**Returns**: <code>number</code> - - The parsed integer value of the input element.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | The ID of the input element. |

<a name="Controller+startTimer"></a>

### controller.startTimer()
Start the timer based on user input and update the clock.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+addEventHandlers"></a>

### controller.addEventHandlers()
Add event handlers for start, stop, and reset buttons.

**Kind**: instance method of [<code>Controller</code>](#Controller)  
<a name="Controller+handleEvent"></a>

### controller.handleEvent(e)
Handle events triggered by button clicks.

**Kind**: instance method of [<code>Controller</code>](#Controller)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The event object. |


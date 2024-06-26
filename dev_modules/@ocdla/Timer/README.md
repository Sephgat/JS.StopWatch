## Links
[Controller Links](../../../src/js/README.md) <br>
[Main](../../../README.md)

<a name="Timer"></a>

## Timer
Represents a Timer with countdown functionality.
### Versions

## Version 0.2.0
removed several exports now just exporting one
Timer no longer renders itself
providing a new ontick method


## Version 0.2.1 
forgot to add changelog


## Version 0.2.3
Changes to file path, now it is using path resolves in the project.
General clean up of unwanted comments

## Version 0.2.4 
modified path spec to go from the @ocdla file located in node_modules

## Version 0.2.5
Added new Component to display query


**Kind**: global class  

* [Timer](#Timer)
    * _instance_
        * [.g](#Timer+g)
        * [.interval](#Timer+interval) : <code>number</code>
        * [.callbacks](#Timer+callbacks)
        * [.start()](#Timer+start)
        * [.stop()](#Timer+stop)
        * [.tick(seconds)](#Timer+tick)
        * [.onTick(fn)](#Timer+onTick)
    * _static_
        * [.convertTimer(sec)](#Timer.convertTimer) ΓçÆ <code>Array.&lt;number&gt;</code>
        * [.padTimer(number)](#Timer.padTimer) <code>string</code>
        * [.parse(seconds, pad)](#Timer.parse) <code>Array.&lt;string&gt;</code>
        * [.toSeconds(hours, minutes, seconds)](#Timer.toSeconds) ΓçÆ <code>number</code>

<a name="Timer+g"></a>

### timer.g
The generator used to display units (usually seconds) for this timer.

**Kind**: instance property of [<code>Timer</code>](#Timer)  
<a name="Timer+interval"></a>

### timer.interval : <code>number</code>
Rederce to the interval used for timer updates

**Kind**: instance property of [<code>Timer</code>](#Timer)  
<a name="Timer+callbacks"></a>

### timer.callbacks
Array to store csllback functions

**Kind**: instance property of [<code>Timer</code>](#Timer)  
<a name="Timer+start"></a>

### timer.start()
Start the timer and trigger tick function at specified intervals.

**Kind**: instance method of [<code>Timer</code>](#Timer)  
<a name="Timer+stop"></a>

### timer.stop()
Stop the timer.

**Kind**: instance method of [<code>Timer</code>](#Timer)  
<a name="Timer+tick"></a>

### timer.tick(seconds)
Execute callback functions with the current time values.

**Kind**: instance method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| seconds | <code>number</code> | The remaining seconds on the timer. |

<a name="Timer+onTick"></a>

### timer.onTick(fn)
Register a callback function to be executed on each tick.

**Kind**: instance method of [<code>Timer</code>](#Timer)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The callback function to be executed. |

<a name="Timer.convertTimer"></a>

### Timer.convertTimer(sec) <code>Array.&lt;number&gt;</code>
Convert total seconds into hours, minutes, and seconds.

**Kind**: static method of [<code>Timer</code>](#Timer)  
**Returns**: <code>Array.&lt;number&gt;</code> - - An array containing hours, minutes, and seconds.  

| Param | Type | Description |
| --- | --- | --- |
| sec | <code>number</code> | The total seconds to convert. |

<a name="Timer.padTimer"></a>

### Timer.padTimer(number) <code>string</code>
Pad a number with a leading zero if it is less than 10.

**Kind**: static method of [<code>Timer</code>](#Timer)  
**Returns**: <code>string</code> - - The padded number as a string.  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | The number to pad. |

<a name="Timer.parse"></a>

### Timer.parse(seconds, pad) <code>Array.&lt;string&gt;</code>
Parse total seconds into hours, minutes, and seconds.

**Kind**: static method of [<code>Timer</code>](#Timer)  
**Returns**: <code>Array.&lt;string&gt;</code> - - An array containing hour, minute, and second strings.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| seconds | <code>number</code> |  | The total seconds to parse. |
| pad | <code>boolean</code> | <code>true</code> | Whether to pad the values with zeros. |

<a name="Timer.toSeconds"></a>

### Timer.toSeconds(hours, minutes, seconds) <code>number</code>
Convert hours, minutes, and seconds into total seconds.

**Kind**: static method of [<code>Timer</code>](#Timer)  
**Returns**: <code>number</code> - - The total seconds equivalent.  

| Param | Type | Description |
| --- | --- | --- |
| hours | <code>number</code> | The hours component. |
| minutes | <code>number</code> | The minutes component. |
| seconds | <code>number</code> | The seconds component. |


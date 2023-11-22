[@passes/types](../README.md) / [Exports](../modules.md) / DocumentWithPasses

# Interface: DocumentWithPasses

## Hierarchy

- `Document`

  ↳ **`DocumentWithPasses`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](DocumentWithPasses.md#attribute_node)
- [CDATA\_SECTION\_NODE](DocumentWithPasses.md#cdata_section_node)
- [COMMENT\_NODE](DocumentWithPasses.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](DocumentWithPasses.md#document_fragment_node)
- [DOCUMENT\_NODE](DocumentWithPasses.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](DocumentWithPasses.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](DocumentWithPasses.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](DocumentWithPasses.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](DocumentWithPasses.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](DocumentWithPasses.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](DocumentWithPasses.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](DocumentWithPasses.md#document_type_node)
- [ELEMENT\_NODE](DocumentWithPasses.md#element_node)
- [ENTITY\_NODE](DocumentWithPasses.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](DocumentWithPasses.md#entity_reference_node)
- [NOTATION\_NODE](DocumentWithPasses.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](DocumentWithPasses.md#processing_instruction_node)
- [TEXT\_NODE](DocumentWithPasses.md#text_node)
- [URL](DocumentWithPasses.md#url)
- [activeElement](DocumentWithPasses.md#activeelement)
- [adoptedStyleSheets](DocumentWithPasses.md#adoptedstylesheets)
- [alinkColor](DocumentWithPasses.md#alinkcolor)
- [all](DocumentWithPasses.md#all)
- [anchors](DocumentWithPasses.md#anchors)
- [applets](DocumentWithPasses.md#applets)
- [baseURI](DocumentWithPasses.md#baseuri)
- [bgColor](DocumentWithPasses.md#bgcolor)
- [body](DocumentWithPasses.md#body)
- [characterSet](DocumentWithPasses.md#characterset)
- [charset](DocumentWithPasses.md#charset)
- [childElementCount](DocumentWithPasses.md#childelementcount)
- [childNodes](DocumentWithPasses.md#childnodes)
- [children](DocumentWithPasses.md#children)
- [compatMode](DocumentWithPasses.md#compatmode)
- [contentType](DocumentWithPasses.md#contenttype)
- [cookie](DocumentWithPasses.md#cookie)
- [currentScript](DocumentWithPasses.md#currentscript)
- [defaultView](DocumentWithPasses.md#defaultview)
- [designMode](DocumentWithPasses.md#designmode)
- [dir](DocumentWithPasses.md#dir)
- [doctype](DocumentWithPasses.md#doctype)
- [documentElement](DocumentWithPasses.md#documentelement)
- [documentURI](DocumentWithPasses.md#documenturi)
- [domain](DocumentWithPasses.md#domain)
- [embeds](DocumentWithPasses.md#embeds)
- [fgColor](DocumentWithPasses.md#fgcolor)
- [firstChild](DocumentWithPasses.md#firstchild)
- [firstElementChild](DocumentWithPasses.md#firstelementchild)
- [fonts](DocumentWithPasses.md#fonts)
- [forms](DocumentWithPasses.md#forms)
- [fullscreen](DocumentWithPasses.md#fullscreen)
- [fullscreenElement](DocumentWithPasses.md#fullscreenelement)
- [fullscreenEnabled](DocumentWithPasses.md#fullscreenenabled)
- [head](DocumentWithPasses.md#head)
- [hidden](DocumentWithPasses.md#hidden)
- [images](DocumentWithPasses.md#images)
- [implementation](DocumentWithPasses.md#implementation)
- [inputEncoding](DocumentWithPasses.md#inputencoding)
- [isConnected](DocumentWithPasses.md#isconnected)
- [lastChild](DocumentWithPasses.md#lastchild)
- [lastElementChild](DocumentWithPasses.md#lastelementchild)
- [lastModified](DocumentWithPasses.md#lastmodified)
- [linkColor](DocumentWithPasses.md#linkcolor)
- [links](DocumentWithPasses.md#links)
- [nextSibling](DocumentWithPasses.md#nextsibling)
- [nodeName](DocumentWithPasses.md#nodename)
- [nodeType](DocumentWithPasses.md#nodetype)
- [nodeValue](DocumentWithPasses.md#nodevalue)
- [onabort](DocumentWithPasses.md#onabort)
- [onanimationcancel](DocumentWithPasses.md#onanimationcancel)
- [onanimationend](DocumentWithPasses.md#onanimationend)
- [onanimationiteration](DocumentWithPasses.md#onanimationiteration)
- [onanimationstart](DocumentWithPasses.md#onanimationstart)
- [onauxclick](DocumentWithPasses.md#onauxclick)
- [onbeforeinput](DocumentWithPasses.md#onbeforeinput)
- [onblur](DocumentWithPasses.md#onblur)
- [oncancel](DocumentWithPasses.md#oncancel)
- [oncanplay](DocumentWithPasses.md#oncanplay)
- [oncanplaythrough](DocumentWithPasses.md#oncanplaythrough)
- [onchange](DocumentWithPasses.md#onchange)
- [onclick](DocumentWithPasses.md#onclick)
- [onclose](DocumentWithPasses.md#onclose)
- [oncontextmenu](DocumentWithPasses.md#oncontextmenu)
- [oncopy](DocumentWithPasses.md#oncopy)
- [oncuechange](DocumentWithPasses.md#oncuechange)
- [oncut](DocumentWithPasses.md#oncut)
- [ondblclick](DocumentWithPasses.md#ondblclick)
- [ondrag](DocumentWithPasses.md#ondrag)
- [ondragend](DocumentWithPasses.md#ondragend)
- [ondragenter](DocumentWithPasses.md#ondragenter)
- [ondragleave](DocumentWithPasses.md#ondragleave)
- [ondragover](DocumentWithPasses.md#ondragover)
- [ondragstart](DocumentWithPasses.md#ondragstart)
- [ondrop](DocumentWithPasses.md#ondrop)
- [ondurationchange](DocumentWithPasses.md#ondurationchange)
- [onemptied](DocumentWithPasses.md#onemptied)
- [onended](DocumentWithPasses.md#onended)
- [onerror](DocumentWithPasses.md#onerror)
- [onfocus](DocumentWithPasses.md#onfocus)
- [onformdata](DocumentWithPasses.md#onformdata)
- [onfullscreenchange](DocumentWithPasses.md#onfullscreenchange)
- [onfullscreenerror](DocumentWithPasses.md#onfullscreenerror)
- [ongotpointercapture](DocumentWithPasses.md#ongotpointercapture)
- [oninput](DocumentWithPasses.md#oninput)
- [oninvalid](DocumentWithPasses.md#oninvalid)
- [onkeydown](DocumentWithPasses.md#onkeydown)
- [onkeypress](DocumentWithPasses.md#onkeypress)
- [onkeyup](DocumentWithPasses.md#onkeyup)
- [onload](DocumentWithPasses.md#onload)
- [onloadeddata](DocumentWithPasses.md#onloadeddata)
- [onloadedmetadata](DocumentWithPasses.md#onloadedmetadata)
- [onloadstart](DocumentWithPasses.md#onloadstart)
- [onlostpointercapture](DocumentWithPasses.md#onlostpointercapture)
- [onmousedown](DocumentWithPasses.md#onmousedown)
- [onmouseenter](DocumentWithPasses.md#onmouseenter)
- [onmouseleave](DocumentWithPasses.md#onmouseleave)
- [onmousemove](DocumentWithPasses.md#onmousemove)
- [onmouseout](DocumentWithPasses.md#onmouseout)
- [onmouseover](DocumentWithPasses.md#onmouseover)
- [onmouseup](DocumentWithPasses.md#onmouseup)
- [onpaste](DocumentWithPasses.md#onpaste)
- [onpause](DocumentWithPasses.md#onpause)
- [onplay](DocumentWithPasses.md#onplay)
- [onplaying](DocumentWithPasses.md#onplaying)
- [onpointercancel](DocumentWithPasses.md#onpointercancel)
- [onpointerdown](DocumentWithPasses.md#onpointerdown)
- [onpointerenter](DocumentWithPasses.md#onpointerenter)
- [onpointerleave](DocumentWithPasses.md#onpointerleave)
- [onpointerlockchange](DocumentWithPasses.md#onpointerlockchange)
- [onpointerlockerror](DocumentWithPasses.md#onpointerlockerror)
- [onpointermove](DocumentWithPasses.md#onpointermove)
- [onpointerout](DocumentWithPasses.md#onpointerout)
- [onpointerover](DocumentWithPasses.md#onpointerover)
- [onpointerup](DocumentWithPasses.md#onpointerup)
- [onprogress](DocumentWithPasses.md#onprogress)
- [onratechange](DocumentWithPasses.md#onratechange)
- [onreadystatechange](DocumentWithPasses.md#onreadystatechange)
- [onreset](DocumentWithPasses.md#onreset)
- [onresize](DocumentWithPasses.md#onresize)
- [onscroll](DocumentWithPasses.md#onscroll)
- [onscrollend](DocumentWithPasses.md#onscrollend)
- [onsecuritypolicyviolation](DocumentWithPasses.md#onsecuritypolicyviolation)
- [onseeked](DocumentWithPasses.md#onseeked)
- [onseeking](DocumentWithPasses.md#onseeking)
- [onselect](DocumentWithPasses.md#onselect)
- [onselectionchange](DocumentWithPasses.md#onselectionchange)
- [onselectstart](DocumentWithPasses.md#onselectstart)
- [onslotchange](DocumentWithPasses.md#onslotchange)
- [onstalled](DocumentWithPasses.md#onstalled)
- [onsubmit](DocumentWithPasses.md#onsubmit)
- [onsuspend](DocumentWithPasses.md#onsuspend)
- [ontimeupdate](DocumentWithPasses.md#ontimeupdate)
- [ontoggle](DocumentWithPasses.md#ontoggle)
- [ontouchcancel](DocumentWithPasses.md#ontouchcancel)
- [ontouchend](DocumentWithPasses.md#ontouchend)
- [ontouchmove](DocumentWithPasses.md#ontouchmove)
- [ontouchstart](DocumentWithPasses.md#ontouchstart)
- [ontransitioncancel](DocumentWithPasses.md#ontransitioncancel)
- [ontransitionend](DocumentWithPasses.md#ontransitionend)
- [ontransitionrun](DocumentWithPasses.md#ontransitionrun)
- [ontransitionstart](DocumentWithPasses.md#ontransitionstart)
- [onvisibilitychange](DocumentWithPasses.md#onvisibilitychange)
- [onvolumechange](DocumentWithPasses.md#onvolumechange)
- [onwaiting](DocumentWithPasses.md#onwaiting)
- [onwebkitanimationend](DocumentWithPasses.md#onwebkitanimationend)
- [onwebkitanimationiteration](DocumentWithPasses.md#onwebkitanimationiteration)
- [onwebkitanimationstart](DocumentWithPasses.md#onwebkitanimationstart)
- [onwebkittransitionend](DocumentWithPasses.md#onwebkittransitionend)
- [onwheel](DocumentWithPasses.md#onwheel)
- [ownerDocument](DocumentWithPasses.md#ownerdocument)
- [parentElement](DocumentWithPasses.md#parentelement)
- [parentNode](DocumentWithPasses.md#parentnode)
- [passes](DocumentWithPasses.md#passes)
- [pictureInPictureElement](DocumentWithPasses.md#pictureinpictureelement)
- [pictureInPictureEnabled](DocumentWithPasses.md#pictureinpictureenabled)
- [plugins](DocumentWithPasses.md#plugins)
- [pointerLockElement](DocumentWithPasses.md#pointerlockelement)
- [previousSibling](DocumentWithPasses.md#previoussibling)
- [readyState](DocumentWithPasses.md#readystate)
- [referrer](DocumentWithPasses.md#referrer)
- [rootElement](DocumentWithPasses.md#rootelement)
- [scripts](DocumentWithPasses.md#scripts)
- [scrollingElement](DocumentWithPasses.md#scrollingelement)
- [styleSheets](DocumentWithPasses.md#stylesheets)
- [textContent](DocumentWithPasses.md#textcontent)
- [timeline](DocumentWithPasses.md#timeline)
- [title](DocumentWithPasses.md#title)
- [visibilityState](DocumentWithPasses.md#visibilitystate)
- [vlinkColor](DocumentWithPasses.md#vlinkcolor)

### Accessors

- [location](DocumentWithPasses.md#location)

### Methods

- [addEventListener](DocumentWithPasses.md#addeventlistener)
- [adoptNode](DocumentWithPasses.md#adoptnode)
- [append](DocumentWithPasses.md#append)
- [appendChild](DocumentWithPasses.md#appendchild)
- [captureEvents](DocumentWithPasses.md#captureevents)
- [caretRangeFromPoint](DocumentWithPasses.md#caretrangefrompoint)
- [clear](DocumentWithPasses.md#clear)
- [cloneNode](DocumentWithPasses.md#clonenode)
- [close](DocumentWithPasses.md#close)
- [compareDocumentPosition](DocumentWithPasses.md#comparedocumentposition)
- [contains](DocumentWithPasses.md#contains)
- [createAttribute](DocumentWithPasses.md#createattribute)
- [createAttributeNS](DocumentWithPasses.md#createattributens)
- [createCDATASection](DocumentWithPasses.md#createcdatasection)
- [createComment](DocumentWithPasses.md#createcomment)
- [createDocumentFragment](DocumentWithPasses.md#createdocumentfragment)
- [createElement](DocumentWithPasses.md#createelement)
- [createElementNS](DocumentWithPasses.md#createelementns)
- [createEvent](DocumentWithPasses.md#createevent)
- [createExpression](DocumentWithPasses.md#createexpression)
- [createNSResolver](DocumentWithPasses.md#creatensresolver)
- [createNodeIterator](DocumentWithPasses.md#createnodeiterator)
- [createProcessingInstruction](DocumentWithPasses.md#createprocessinginstruction)
- [createRange](DocumentWithPasses.md#createrange)
- [createTextNode](DocumentWithPasses.md#createtextnode)
- [createTreeWalker](DocumentWithPasses.md#createtreewalker)
- [dispatchEvent](DocumentWithPasses.md#dispatchevent)
- [elementFromPoint](DocumentWithPasses.md#elementfrompoint)
- [elementsFromPoint](DocumentWithPasses.md#elementsfrompoint)
- [evaluate](DocumentWithPasses.md#evaluate)
- [execCommand](DocumentWithPasses.md#execcommand)
- [exitFullscreen](DocumentWithPasses.md#exitfullscreen)
- [exitPictureInPicture](DocumentWithPasses.md#exitpictureinpicture)
- [exitPointerLock](DocumentWithPasses.md#exitpointerlock)
- [getAnimations](DocumentWithPasses.md#getanimations)
- [getElementById](DocumentWithPasses.md#getelementbyid)
- [getElementsByClassName](DocumentWithPasses.md#getelementsbyclassname)
- [getElementsByName](DocumentWithPasses.md#getelementsbyname)
- [getElementsByTagName](DocumentWithPasses.md#getelementsbytagname)
- [getElementsByTagNameNS](DocumentWithPasses.md#getelementsbytagnamens)
- [getRootNode](DocumentWithPasses.md#getrootnode)
- [getSelection](DocumentWithPasses.md#getselection)
- [hasChildNodes](DocumentWithPasses.md#haschildnodes)
- [hasFocus](DocumentWithPasses.md#hasfocus)
- [hasStorageAccess](DocumentWithPasses.md#hasstorageaccess)
- [importNode](DocumentWithPasses.md#importnode)
- [insertBefore](DocumentWithPasses.md#insertbefore)
- [isDefaultNamespace](DocumentWithPasses.md#isdefaultnamespace)
- [isEqualNode](DocumentWithPasses.md#isequalnode)
- [isSameNode](DocumentWithPasses.md#issamenode)
- [lookupNamespaceURI](DocumentWithPasses.md#lookupnamespaceuri)
- [lookupPrefix](DocumentWithPasses.md#lookupprefix)
- [normalize](DocumentWithPasses.md#normalize)
- [open](DocumentWithPasses.md#open)
- [prepend](DocumentWithPasses.md#prepend)
- [queryCommandEnabled](DocumentWithPasses.md#querycommandenabled)
- [queryCommandIndeterm](DocumentWithPasses.md#querycommandindeterm)
- [queryCommandState](DocumentWithPasses.md#querycommandstate)
- [queryCommandSupported](DocumentWithPasses.md#querycommandsupported)
- [queryCommandValue](DocumentWithPasses.md#querycommandvalue)
- [querySelector](DocumentWithPasses.md#queryselector)
- [querySelectorAll](DocumentWithPasses.md#queryselectorall)
- [releaseEvents](DocumentWithPasses.md#releaseevents)
- [removeChild](DocumentWithPasses.md#removechild)
- [removeEventListener](DocumentWithPasses.md#removeeventlistener)
- [replaceChild](DocumentWithPasses.md#replacechild)
- [replaceChildren](DocumentWithPasses.md#replacechildren)
- [requestStorageAccess](DocumentWithPasses.md#requeststorageaccess)
- [write](DocumentWithPasses.md#write)
- [writeln](DocumentWithPasses.md#writeln)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: ``2``

#### Inherited from

Document.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16203

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: ``4``

node is a CDATASection node.

#### Inherited from

Document.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16207

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: ``8``

node is a Comment node.

#### Inherited from

Document.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16213

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: ``11``

node is a DocumentFragment node.

#### Inherited from

Document.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16219

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: ``9``

node is a document.

#### Inherited from

Document.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16215

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: ``16``

Set when other is a descendant of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16230

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: ``8``

Set when other is an ancestor of node.

#### Inherited from

Document.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16228

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: ``1``

Set when node and other are not in the same tree.

#### Inherited from

Document.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16222

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: ``4``

Set when other is following node.

#### Inherited from

Document.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16226

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: ``32``

#### Inherited from

Document.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16231

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: ``2``

Set when other is preceding node.

#### Inherited from

Document.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16224

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: ``10``

node is a doctype.

#### Inherited from

Document.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16217

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: ``1``

node is an element.

#### Inherited from

Document.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16202

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: ``6``

#### Inherited from

Document.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16209

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: ``5``

#### Inherited from

Document.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16208

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: ``12``

#### Inherited from

Document.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16220

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: ``7``

node is a ProcessingInstruction node.

#### Inherited from

Document.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16211

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: ``3``

node is a Text node.

#### Inherited from

Document.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16205

___

### URL

• `Readonly` **URL**: `string`

Sets or gets the URL for the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/URL)

#### Inherited from

Document.URL

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6735

___

### activeElement

• `Readonly` **activeElement**: ``null`` \| `Element`

Returns the deepest element in the document through which or to which key events are being routed. This is, roughly speaking, the focused element in the document.

For the purposes of this API, when a child browsing context is focused, its container is focused in the parent browsing context. For example, if the user moves the focus to a text control in an iframe, the iframe is the element returned by the activeElement API in the iframe's node document.

Similarly, when the focused element is in a different node tree than documentOrShadowRoot, the element returned will be the host that's located in the same node tree as documentOrShadowRoot if documentOrShadowRoot is a shadow-including inclusive ancestor of the focused element, and null if not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/activeElement)

#### Inherited from

Document.activeElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7403

___

### adoptedStyleSheets

• **adoptedStyleSheets**: `CSSStyleSheet`[]

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptedStyleSheets)

#### Inherited from

Document.adoptedStyleSheets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7405

___

### alinkColor

• **alinkColor**: `string`

Sets or gets the color of all active links in the document.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/alinkColor)

#### Inherited from

Document.alinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6742

___

### all

• `Readonly` **all**: `HTMLAllCollection`

Returns a reference to the collection of elements contained by the object.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/all)

#### Inherited from

Document.all

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6749

___

### anchors

• `Readonly` **anchors**: `HTMLCollectionOf`\<`HTMLAnchorElement`\>

Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/anchors)

#### Inherited from

Document.anchors

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6756

___

### applets

• `Readonly` **applets**: `HTMLCollection`

Retrieves a collection of all applet objects in the document.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/applets)

#### Inherited from

Document.applets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6763

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

Document.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16072

___

### bgColor

• **bgColor**: `string`

Deprecated. Sets or retrieves a value that indicates the background color behind the object.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/bgColor)

#### Inherited from

Document.bgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6770

___

### body

• **body**: `HTMLElement`

Specifies the beginning and end of the document body.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/body)

#### Inherited from

Document.body

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6776

___

### characterSet

• `Readonly` **characterSet**: `string`

Returns document's encoding.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

#### Inherited from

Document.characterSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6782

___

### charset

• `Readonly` **charset**: `string`

Gets or sets the character set used to encode the object.

**`Deprecated`**

This is a legacy alias of `characterSet`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

#### Inherited from

Document.charset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6789

___

### childElementCount

• `Readonly` **childElementCount**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

Document.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16761

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`\<`ChildNode`\>

Returns the children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

Document.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16078

___

### children

• `Readonly` **children**: `HTMLCollection`

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

Document.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16767

___

### compatMode

• `Readonly` **compatMode**: `string`

Gets a value that indicates whether standards-compliant mode is switched on for the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/compatMode)

#### Inherited from

Document.compatMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6795

___

### contentType

• `Readonly` **contentType**: `string`

Returns document's content type.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/contentType)

#### Inherited from

Document.contentType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6801

___

### cookie

• **cookie**: `string`

Returns the HTTP cookies that apply to the Document. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are sandboxed into a unique origin (e.g. in an iframe with the sandbox attribute), a "SecurityError" DOMException will be thrown on getting and setting.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/cookie)

#### Inherited from

Document.cookie

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6811

___

### currentScript

• `Readonly` **currentScript**: ``null`` \| `HTMLOrSVGScriptElement`

Returns the script element, or the SVG script element, that is currently executing, as long as the element represents a classic script. In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the Document is not currently executing a script or SVG script element (e.g., because the running script is an event handler, or a timeout), or if the currently executing script or SVG script element represents a module script.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/currentScript)

#### Inherited from

Document.currentScript

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6819

___

### defaultView

• `Readonly` **defaultView**: ``null`` \| `Window` & typeof `globalThis`

Returns the Window object of the active document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/defaultView)

#### Inherited from

Document.defaultView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6825

___

### designMode

• **designMode**: `string`

Sets or gets a value that indicates whether the document can be edited.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/designMode)

#### Inherited from

Document.designMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6831

___

### dir

• **dir**: `string`

Sets or retrieves a value that indicates the reading order of the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/dir)

#### Inherited from

Document.dir

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6837

___

### doctype

• `Readonly` **doctype**: ``null`` \| `DocumentType`

Gets an object representing the document type declaration associated with the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/doctype)

#### Inherited from

Document.doctype

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6843

___

### documentElement

• `Readonly` **documentElement**: `HTMLElement`

Gets a reference to the root node of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentElement)

#### Inherited from

Document.documentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6849

___

### documentURI

• `Readonly` **documentURI**: `string`

Returns document's URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/documentURI)

#### Inherited from

Document.documentURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6855

___

### domain

• **domain**: `string`

Sets or gets the security domain of the document.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/domain)

#### Inherited from

Document.domain

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6862

___

### embeds

• `Readonly` **embeds**: `HTMLCollectionOf`\<`HTMLEmbedElement`\>

Retrieves a collection of all embed objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/embeds)

#### Inherited from

Document.embeds

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6868

___

### fgColor

• **fgColor**: `string`

Sets or gets the foreground (text) color of the document.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fgColor)

#### Inherited from

Document.fgColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6875

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| `ChildNode`

Returns the first child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

Document.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16084

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| `Element`

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

Document.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16773

___

### fonts

• `Readonly` **fonts**: `FontFaceSet`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fonts)

#### Inherited from

Document.fonts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8600

___

### forms

• `Readonly` **forms**: `HTMLCollectionOf`\<`HTMLFormElement`\>

Retrieves a collection, in source order, of all form objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/forms)

#### Inherited from

Document.forms

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6881

___

### fullscreen

• `Readonly` **fullscreen**: `boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreen)

#### Inherited from

Document.fullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6887

___

### fullscreenElement

• `Readonly` **fullscreenElement**: ``null`` \| `Element`

Returns document's fullscreen element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenElement)

#### Inherited from

Document.fullscreenElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7411

___

### fullscreenEnabled

• `Readonly` **fullscreenEnabled**: `boolean`

Returns true if document has the ability to display elements fullscreen and fullscreen is supported, or false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenEnabled)

#### Inherited from

Document.fullscreenEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6893

___

### head

• `Readonly` **head**: `HTMLHeadElement`

Returns the head element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/head)

#### Inherited from

Document.head

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6899

___

### hidden

• `Readonly` **hidden**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hidden)

#### Inherited from

Document.hidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6901

___

### images

• `Readonly` **images**: `HTMLCollectionOf`\<`HTMLImageElement`\>

Retrieves a collection, in source order, of img objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/images)

#### Inherited from

Document.images

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6907

___

### implementation

• `Readonly` **implementation**: `DOMImplementation`

Gets the implementation object of the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/implementation)

#### Inherited from

Document.implementation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6913

___

### inputEncoding

• `Readonly` **inputEncoding**: `string`

Returns the character encoding used to create the webpage that is loaded into the document object.

**`Deprecated`**

This is a legacy alias of `characterSet`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/characterSet)

#### Inherited from

Document.inputEncoding

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6920

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

Document.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16090

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| `ChildNode`

Returns the last child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

Document.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16096

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| `Element`

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

Document.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16779

___

### lastModified

• `Readonly` **lastModified**: `string`

Gets the date that the page was last modified, if the page supplies one.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastModified)

#### Inherited from

Document.lastModified

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6926

___

### linkColor

• **linkColor**: `string`

Sets or gets the color of the document links.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/linkColor)

#### Inherited from

Document.linkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6933

___

### links

• `Readonly` **links**: `HTMLCollectionOf`\<`HTMLAnchorElement` \| `HTMLAreaElement`\>

Retrieves a collection of all a objects that specify the href property and all area objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/links)

#### Inherited from

Document.links

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6939

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| `ChildNode`

Returns the next sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

Document.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16102

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

Document.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16108

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

Document.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16114

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

Document.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16116

___

### onabort

• **onabort**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

Fires when the user aborts the download.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

Document.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8946

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Inherited from

Document.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8948

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

Document.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8950

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

Document.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8952

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

Document.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8954

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Inherited from

Document.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8956

___

### onbeforeinput

• **onbeforeinput**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `InputEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforeinput_event)

#### Inherited from

Document.onbeforeinput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8958

___

### onblur

• **onblur**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

Fires when the object loses the input focus.

**`Param`**

The focus event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Inherited from

Document.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8965

___

### oncancel

• **oncancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Inherited from

Document.oncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8967

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when playback is possible, but would require further buffering.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Inherited from

Document.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8974

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Inherited from

Document.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8976

___

### onchange

• **onchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires when the contents of the object or selection have changed.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Inherited from

Document.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8983

___

### onclick

• **onclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the left mouse button on the object

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Inherited from

Document.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8990

___

### onclose

• **onclose**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Inherited from

Document.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8992

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Inherited from

Document.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8999

___

### oncopy

• **oncopy**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Inherited from

Document.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9001

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Inherited from

Document.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9003

___

### oncut

• **oncut**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Inherited from

Document.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9005

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user double-clicks the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Inherited from

Document.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9012

___

### ondrag

• **ondrag**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object continuously during a drag operation.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Inherited from

Document.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9019

___

### ondragend

• **ondragend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Inherited from

Document.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9026

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`Param`**

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Inherited from

Document.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9033

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`Param`**

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Inherited from

Document.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9040

___

### ondragover

• **ondragover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Inherited from

Document.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9047

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Inherited from

Document.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9054

___

### ondrop

• **ondrop**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Inherited from

Document.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9056

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the duration attribute is updated.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Inherited from

Document.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9063

___

### onemptied

• **onemptied**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the media element is reset to its initial state.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Inherited from

Document.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9070

___

### onended

• **onended**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the end of playback is reached.

**`Param`**

The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Inherited from

Document.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9077

___

### onerror

• **onerror**: `OnErrorEventHandler`

Fires when an error occurs during object loading.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

Document.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9084

___

### onfocus

• **onfocus**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

Fires when the object receives focus.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Inherited from

Document.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9091

___

### onformdata

• **onformdata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FormDataEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Inherited from

Document.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9093

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenchange_event)

#### Inherited from

Document.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6948

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/fullscreenerror_event)

#### Inherited from

Document.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6950

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

Document.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9095

___

### oninput

• **oninput**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event)

#### Inherited from

Document.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9097

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Inherited from

Document.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9099

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user presses a key.

**`Param`**

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Inherited from

Document.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9106

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user presses an alphanumeric key.

**`Param`**

The event.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

Document.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9114

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user releases a key.

**`Param`**

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Inherited from

Document.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9121

___

### onload

• **onload**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires immediately after the browser loads the object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)

#### Inherited from

Document.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9128

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when media data is loaded at the current playback position.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Inherited from

Document.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9135

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Inherited from

Document.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9142

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when Internet Explorer begins looking for media data.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Inherited from

Document.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9149

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lostpointercapture_event)

#### Inherited from

Document.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9151

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the object with either mouse button.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Inherited from

Document.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9158

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Inherited from

Document.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9160

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Inherited from

Document.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9162

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse over the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Inherited from

Document.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9169

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Inherited from

Document.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9176

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer into the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Inherited from

Document.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9183

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Inherited from

Document.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9190

___

### onpaste

• **onpaste**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Inherited from

Document.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9192

___

### onpause

• **onpause**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when playback is paused.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Inherited from

Document.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9199

___

### onplay

• **onplay**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the play method is requested.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Inherited from

Document.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9206

___

### onplaying

• **onplaying**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the audio or video has started playing.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Inherited from

Document.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Inherited from

Document.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Inherited from

Document.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Inherited from

Document.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9219

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Inherited from

Document.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9221

___

### onpointerlockchange

• **onpointerlockchange**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockchange_event)

#### Inherited from

Document.onpointerlockchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6952

___

### onpointerlockerror

• **onpointerlockerror**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerlockerror_event)

#### Inherited from

Document.onpointerlockerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6954

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Inherited from

Document.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9223

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Inherited from

Document.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9225

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Inherited from

Document.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9227

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Inherited from

Document.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9229

___

### onprogress

• **onprogress**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ProgressEvent`\<`EventTarget`\>) => `any`

Occurs to indicate progress while downloading media data.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Inherited from

Document.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9236

___

### onratechange

• **onratechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the playback rate is increased or decreased.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Inherited from

Document.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9243

___

### onreadystatechange

• **onreadystatechange**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires when the state of the object has changed.

**`Param`**

The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readystatechange_event)

#### Inherited from

Document.onreadystatechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6961

___

### onreset

• **onreset**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires when the user resets a form.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Inherited from

Document.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9250

___

### onresize

• **onresize**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Inherited from

Document.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9252

___

### onscroll

• **onscroll**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Inherited from

Document.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9259

___

### onscrollend

• **onscrollend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Inherited from

Document.onscrollend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9261

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `SecurityPolicyViolationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Inherited from

Document.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9263

___

### onseeked

• **onseeked**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the seek operation ends.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Inherited from

Document.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9270

___

### onseeking

• **onseeking**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the current playback position is moved.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Inherited from

Document.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9277

___

### onselect

• **onselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Fires when the current selection changes.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Inherited from

Document.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9284

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Inherited from

Document.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9286

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Inherited from

Document.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9288

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Inherited from

Document.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9290

___

### onstalled

• **onstalled**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the download has stopped.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Inherited from

Document.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9297

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `SubmitEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Inherited from

Document.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9299

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs if the load operation has been intentionally halted.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Inherited from

Document.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9306

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs to indicate the current playback position.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Inherited from

Document.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9313

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)

#### Inherited from

Document.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9315

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Inherited from

Document.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9317

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Inherited from

Document.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9319

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Inherited from

Document.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9321

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Inherited from

Document.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9323

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Inherited from

Document.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9325

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

Document.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9327

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Inherited from

Document.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9329

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Inherited from

Document.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9331

___

### onvisibilitychange

• **onvisibilitychange**: ``null`` \| (`this`: `Document`, `ev`: `Event`\<`EventTarget`\>) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilitychange_event)

#### Inherited from

Document.onvisibilitychange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6963

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Inherited from

Document.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9338

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Inherited from

Document.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9345

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

Document.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9351

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

Document.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9357

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

Document.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9363

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`\<`EventTarget`\>) => `any`

**`Deprecated`**

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

Document.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9369

___

### onwheel

• **onwheel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `WheelEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Inherited from

Document.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9371

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null``

#### Inherited from

Document.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6964

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

Document.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16128

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| `ParentNode`

Returns the parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

Document.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16134

___

### passes

• `Optional` **passes**: [`PassesABI`](PassesABI.md)

#### Overrides

Document.passes

#### Defined in

[packages/types/index.d.ts:5](https://github.com/passes-org/passes/blob/76ab3ca/packages/types/index.d.ts#L5)

___

### pictureInPictureElement

• `Readonly` **pictureInPictureElement**: ``null`` \| `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureElement)

#### Inherited from

Document.pictureInPictureElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7413

___

### pictureInPictureEnabled

• `Readonly` **pictureInPictureEnabled**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pictureInPictureEnabled)

#### Inherited from

Document.pictureInPictureEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6966

___

### plugins

• `Readonly` **plugins**: `HTMLCollectionOf`\<`HTMLEmbedElement`\>

Return an HTMLCollection of the embed elements in the Document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/plugins)

#### Inherited from

Document.plugins

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6972

___

### pointerLockElement

• `Readonly` **pointerLockElement**: ``null`` \| `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/pointerLockElement)

#### Inherited from

Document.pointerLockElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7415

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| `ChildNode`

Returns the previous sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

Document.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16140

___

### readyState

• `Readonly` **readyState**: `DocumentReadyState`

Retrieves a value that indicates the current state of the object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/readyState)

#### Inherited from

Document.readyState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6978

___

### referrer

• `Readonly` **referrer**: `string`

Gets the URL of the location that referred the user to the current page.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/referrer)

#### Inherited from

Document.referrer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6984

___

### rootElement

• `Readonly` **rootElement**: ``null`` \| `SVGSVGElement`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/rootElement)

#### Inherited from

Document.rootElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6990

___

### scripts

• `Readonly` **scripts**: `HTMLCollectionOf`\<`HTMLScriptElement`\>

Retrieves a collection of all script objects in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scripts)

#### Inherited from

Document.scripts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6996

___

### scrollingElement

• `Readonly` **scrollingElement**: ``null`` \| `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollingElement)

#### Inherited from

Document.scrollingElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6998

___

### styleSheets

• `Readonly` **styleSheets**: `StyleSheetList`

Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/styleSheets)

#### Inherited from

Document.styleSheets

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7421

___

### textContent

• **textContent**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

#### Inherited from

Document.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16142

___

### timeline

• `Readonly` **timeline**: `DocumentTimeline`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/timeline)

#### Inherited from

Document.timeline

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7000

___

### title

• **title**: `string`

Contains the title of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/title)

#### Inherited from

Document.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7006

___

### visibilityState

• `Readonly` **visibilityState**: `DocumentVisibilityState`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)

#### Inherited from

Document.visibilityState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7008

___

### vlinkColor

• **vlinkColor**: `string`

Sets or gets the color of the links that the user has visited.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/vlinkColor)

#### Inherited from

Document.vlinkColor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7015

## Accessors

### location

• `get` **location**(): `Location`

Contains information about the current URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/location)

#### Returns

`Location`

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6945

• `set` **location**(`href`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `href` | `string` \| `Location` |

#### Returns

`void`

#### Inherited from

Document.location

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6946

## Methods

### addEventListener

▸ **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `Document`, `ev`: `DocumentEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7367

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

Document.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7368

___

### adoptNode

▸ **adoptNode**\<`T`\>(`node`): `T`

Moves node from another document and returns it.

If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a "HierarchyRequestError" DOMException.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/adoptNode)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Document.adoptNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7023

___

### append

▸ **append**(`...nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

Document.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16787

___

### appendChild

▸ **appendChild**\<`T`\>(`node`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

Document.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16144

___

### captureEvents

▸ **captureEvents**(): `void`

#### Returns

`void`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/captureEvents)

#### Inherited from

Document.captureEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7029

___

### caretRangeFromPoint

▸ **caretRangeFromPoint**(`x`, `y`): ``null`` \| `Range`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``null`` \| `Range`

**`Deprecated`**

#### Inherited from

Document.caretRangeFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7031

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/clear)

#### Inherited from

Document.clear

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7037

___

### cloneNode

▸ **cloneNode**(`deep?`): `Node`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

`Node`

#### Inherited from

Document.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16150

___

### close

▸ **close**(): `void`

Closes an output stream and forces the sent data to display.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/close)

#### Returns

`void`

#### Inherited from

Document.close

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7043

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`number`

#### Inherited from

Document.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16156

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

Document.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16162

___

### createAttribute

▸ **createAttribute**(`localName`): `Attr`

Creates an attribute object with a specified name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `localName` | `string` |

#### Returns

`Attr`

#### Inherited from

Document.createAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7050

___

### createAttributeNS

▸ **createAttributeNS**(`namespace`, `qualifiedName`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |

#### Returns

`Attr`

#### Inherited from

Document.createAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7052

___

### createCDATASection

▸ **createCDATASection**(`data`): `CDATASection`

Returns a CDATASection node whose data is data.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createCDATASection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`CDATASection`

#### Inherited from

Document.createCDATASection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7058

___

### createComment

▸ **createComment**(`data`): `Comment`

Creates a comment object with the specified data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Sets the comment object's data. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createComment) |

#### Returns

`Comment`

#### Inherited from

Document.createComment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7065

___

### createDocumentFragment

▸ **createDocumentFragment**(): `DocumentFragment`

Creates a new document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment)

#### Returns

`DocumentFragment`

#### Inherited from

Document.createDocumentFragment

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7071

___

### createElement

▸ **createElement**\<`K`\>(`tagName`, `options?`): `HTMLElementTagNameMap`[`K`]

Creates an instance of the element for the specified tag.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `K` | The name of an element. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElement) |
| `options?` | `ElementCreationOptions` | - |

#### Returns

`HTMLElementTagNameMap`[`K`]

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7078

▸ **createElement**\<`K`\>(`tagName`, `options?`): `HTMLElementDeprecatedTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `K` |
| `options?` | `ElementCreationOptions` |

#### Returns

`HTMLElementDeprecatedTagNameMap`[`K`]

**`Deprecated`**

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7080

▸ **createElement**(`tagName`, `options?`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagName` | `string` |
| `options?` | `ElementCreationOptions` |

#### Returns

`HTMLElement`

#### Inherited from

Document.createElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7081

___

### createElementNS

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): `HTMLElement`

Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after ":" (U+003E) in qualifiedName or qualifiedName.

If localName does not match the Name production an "InvalidCharacterError" DOMException will be thrown.

If one of the following conditions is true a "NamespaceError" DOMException will be thrown:

localName does not match the QName production.
Namespace prefix is not null and namespace is the empty string.
Namespace prefix is "xml" and namespace is not the XML namespace.
qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
namespace is the XMLNS namespace and neither qualifiedName nor namespace prefix is "xmlns".

When supplied, options's is can be used to create a customized built-in element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createElementNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `qualifiedName` | `string` |

#### Returns

`HTMLElement`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7099

▸ **createElementNS**\<`K`\>(`namespaceURI`, `qualifiedName`): `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `K` |

#### Returns

`SVGElementTagNameMap`[`K`]

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7100

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): `SVGElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `qualifiedName` | `string` |

#### Returns

`SVGElement`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7101

▸ **createElementNS**\<`K`\>(`namespaceURI`, `qualifiedName`): `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1998/Math/MathML"`` |
| `qualifiedName` | `K` |

#### Returns

`MathMLElementTagNameMap`[`K`]

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7102

▸ **createElementNS**(`namespaceURI`, `qualifiedName`): `MathMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1998/Math/MathML"`` |
| `qualifiedName` | `string` |

#### Returns

`MathMLElement`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7103

▸ **createElementNS**(`namespaceURI`, `qualifiedName`, `options?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | `ElementCreationOptions` |

#### Returns

`Element`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7104

▸ **createElementNS**(`namespace`, `qualifiedName`, `options?`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `options?` | `string` \| `ElementCreationOptions` |

#### Returns

`Element`

#### Inherited from

Document.createElementNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7105

___

### createEvent

▸ **createEvent**(`eventInterface`): `AnimationEvent`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createEvent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationEvent"`` |

#### Returns

`AnimationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7107

▸ **createEvent**(`eventInterface`): `AnimationPlaybackEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AnimationPlaybackEvent"`` |

#### Returns

`AnimationPlaybackEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7108

▸ **createEvent**(`eventInterface`): `AudioProcessingEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"AudioProcessingEvent"`` |

#### Returns

`AudioProcessingEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7109

▸ **createEvent**(`eventInterface`): `BeforeUnloadEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BeforeUnloadEvent"`` |

#### Returns

`BeforeUnloadEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7110

▸ **createEvent**(`eventInterface`): `BlobEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"BlobEvent"`` |

#### Returns

`BlobEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7111

▸ **createEvent**(`eventInterface`): `ClipboardEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ClipboardEvent"`` |

#### Returns

`ClipboardEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7112

▸ **createEvent**(`eventInterface`): `CloseEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CloseEvent"`` |

#### Returns

`CloseEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7113

▸ **createEvent**(`eventInterface`): `CompositionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CompositionEvent"`` |

#### Returns

`CompositionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7114

▸ **createEvent**(`eventInterface`): `CustomEvent`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"CustomEvent"`` |

#### Returns

`CustomEvent`\<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7115

▸ **createEvent**(`eventInterface`): `DeviceMotionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceMotionEvent"`` |

#### Returns

`DeviceMotionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7116

▸ **createEvent**(`eventInterface`): `DeviceOrientationEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DeviceOrientationEvent"`` |

#### Returns

`DeviceOrientationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7117

▸ **createEvent**(`eventInterface`): `DragEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"DragEvent"`` |

#### Returns

`DragEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7118

▸ **createEvent**(`eventInterface`): `ErrorEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ErrorEvent"`` |

#### Returns

`ErrorEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7119

▸ **createEvent**(`eventInterface`): `Event`\<`EventTarget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Event"`` |

#### Returns

`Event`\<`EventTarget`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7120

▸ **createEvent**(`eventInterface`): `Event`\<`EventTarget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"Events"`` |

#### Returns

`Event`\<`EventTarget`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7121

▸ **createEvent**(`eventInterface`): `FocusEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FocusEvent"`` |

#### Returns

`FocusEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7122

▸ **createEvent**(`eventInterface`): `FontFaceSetLoadEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FontFaceSetLoadEvent"`` |

#### Returns

`FontFaceSetLoadEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7123

▸ **createEvent**(`eventInterface`): `FormDataEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"FormDataEvent"`` |

#### Returns

`FormDataEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7124

▸ **createEvent**(`eventInterface`): `GamepadEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"GamepadEvent"`` |

#### Returns

`GamepadEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7125

▸ **createEvent**(`eventInterface`): `HashChangeEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"HashChangeEvent"`` |

#### Returns

`HashChangeEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7126

▸ **createEvent**(`eventInterface`): `IDBVersionChangeEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"IDBVersionChangeEvent"`` |

#### Returns

`IDBVersionChangeEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7127

▸ **createEvent**(`eventInterface`): `InputEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"InputEvent"`` |

#### Returns

`InputEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7128

▸ **createEvent**(`eventInterface`): `KeyboardEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"KeyboardEvent"`` |

#### Returns

`KeyboardEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7129

▸ **createEvent**(`eventInterface`): `MIDIConnectionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIConnectionEvent"`` |

#### Returns

`MIDIConnectionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7130

▸ **createEvent**(`eventInterface`): `MIDIMessageEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MIDIMessageEvent"`` |

#### Returns

`MIDIMessageEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7131

▸ **createEvent**(`eventInterface`): `MediaEncryptedEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaEncryptedEvent"`` |

#### Returns

`MediaEncryptedEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7132

▸ **createEvent**(`eventInterface`): `MediaKeyMessageEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaKeyMessageEvent"`` |

#### Returns

`MediaKeyMessageEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7133

▸ **createEvent**(`eventInterface`): `MediaQueryListEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaQueryListEvent"`` |

#### Returns

`MediaQueryListEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7134

▸ **createEvent**(`eventInterface`): `MediaStreamTrackEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MediaStreamTrackEvent"`` |

#### Returns

`MediaStreamTrackEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7135

▸ **createEvent**(`eventInterface`): `MessageEvent`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MessageEvent"`` |

#### Returns

`MessageEvent`\<`any`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7136

▸ **createEvent**(`eventInterface`): `MouseEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvent"`` |

#### Returns

`MouseEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7137

▸ **createEvent**(`eventInterface`): `MouseEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MouseEvents"`` |

#### Returns

`MouseEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7138

▸ **createEvent**(`eventInterface`): `MutationEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvent"`` |

#### Returns

`MutationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7139

▸ **createEvent**(`eventInterface`): `MutationEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"MutationEvents"`` |

#### Returns

`MutationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7140

▸ **createEvent**(`eventInterface`): `OfflineAudioCompletionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"OfflineAudioCompletionEvent"`` |

#### Returns

`OfflineAudioCompletionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7141

▸ **createEvent**(`eventInterface`): `PageTransitionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PageTransitionEvent"`` |

#### Returns

`PageTransitionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7142

▸ **createEvent**(`eventInterface`): `PaymentMethodChangeEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentMethodChangeEvent"`` |

#### Returns

`PaymentMethodChangeEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7143

▸ **createEvent**(`eventInterface`): `PaymentRequestUpdateEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PaymentRequestUpdateEvent"`` |

#### Returns

`PaymentRequestUpdateEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7144

▸ **createEvent**(`eventInterface`): `PictureInPictureEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PictureInPictureEvent"`` |

#### Returns

`PictureInPictureEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7145

▸ **createEvent**(`eventInterface`): `PointerEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PointerEvent"`` |

#### Returns

`PointerEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7146

▸ **createEvent**(`eventInterface`): `PopStateEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PopStateEvent"`` |

#### Returns

`PopStateEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7147

▸ **createEvent**(`eventInterface`): `ProgressEvent`\<`EventTarget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ProgressEvent"`` |

#### Returns

`ProgressEvent`\<`EventTarget`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7148

▸ **createEvent**(`eventInterface`): `PromiseRejectionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"PromiseRejectionEvent"`` |

#### Returns

`PromiseRejectionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7149

▸ **createEvent**(`eventInterface`): `RTCDTMFToneChangeEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDTMFToneChangeEvent"`` |

#### Returns

`RTCDTMFToneChangeEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7150

▸ **createEvent**(`eventInterface`): `RTCDataChannelEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCDataChannelEvent"`` |

#### Returns

`RTCDataChannelEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7151

▸ **createEvent**(`eventInterface`): `RTCErrorEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCErrorEvent"`` |

#### Returns

`RTCErrorEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7152

▸ **createEvent**(`eventInterface`): `RTCPeerConnectionIceErrorEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceErrorEvent"`` |

#### Returns

`RTCPeerConnectionIceErrorEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7153

▸ **createEvent**(`eventInterface`): `RTCPeerConnectionIceEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCPeerConnectionIceEvent"`` |

#### Returns

`RTCPeerConnectionIceEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7154

▸ **createEvent**(`eventInterface`): `RTCTrackEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"RTCTrackEvent"`` |

#### Returns

`RTCTrackEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7155

▸ **createEvent**(`eventInterface`): `SecurityPolicyViolationEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SecurityPolicyViolationEvent"`` |

#### Returns

`SecurityPolicyViolationEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7156

▸ **createEvent**(`eventInterface`): `SpeechSynthesisErrorEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisErrorEvent"`` |

#### Returns

`SpeechSynthesisErrorEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7157

▸ **createEvent**(`eventInterface`): `SpeechSynthesisEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SpeechSynthesisEvent"`` |

#### Returns

`SpeechSynthesisEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7158

▸ **createEvent**(`eventInterface`): `StorageEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"StorageEvent"`` |

#### Returns

`StorageEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7159

▸ **createEvent**(`eventInterface`): `SubmitEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"SubmitEvent"`` |

#### Returns

`SubmitEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7160

▸ **createEvent**(`eventInterface`): `ToggleEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"ToggleEvent"`` |

#### Returns

`ToggleEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7161

▸ **createEvent**(`eventInterface`): `TouchEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TouchEvent"`` |

#### Returns

`TouchEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7162

▸ **createEvent**(`eventInterface`): `TrackEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TrackEvent"`` |

#### Returns

`TrackEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7163

▸ **createEvent**(`eventInterface`): `TransitionEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"TransitionEvent"`` |

#### Returns

`TransitionEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7164

▸ **createEvent**(`eventInterface`): `UIEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvent"`` |

#### Returns

`UIEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7165

▸ **createEvent**(`eventInterface`): `UIEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"UIEvents"`` |

#### Returns

`UIEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7166

▸ **createEvent**(`eventInterface`): `WebGLContextEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WebGLContextEvent"`` |

#### Returns

`WebGLContextEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7167

▸ **createEvent**(`eventInterface`): `WheelEvent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | ``"WheelEvent"`` |

#### Returns

`WheelEvent`

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7168

▸ **createEvent**(`eventInterface`): `Event`\<`EventTarget`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventInterface` | `string` |

#### Returns

`Event`\<`EventTarget`\>

#### Inherited from

Document.createEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7169

___

### createExpression

▸ **createExpression**(`expression`, `resolver?`): `XPathExpression`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createExpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| `XPathNSResolver` |

#### Returns

`XPathExpression`

#### Inherited from

Document.createExpression

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:26322

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): `Node`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNSResolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | `Node` |

#### Returns

`Node`

#### Inherited from

Document.createNSResolver

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:26324

___

### createNodeIterator

▸ **createNodeIterator**(`root`, `whatToShow?`, `filter?`): `NodeIterator`

Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `Node` | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list |
| `filter?` | ``null`` \| `NodeFilter` | A custom NodeFilter function to use. For more information, see filter. Use null for no filter. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createNodeIterator) |

#### Returns

`NodeIterator`

#### Inherited from

Document.createNodeIterator

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7178

___

### createProcessingInstruction

▸ **createProcessingInstruction**(`target`, `data`): `ProcessingInstruction`

Returns a ProcessingInstruction node whose target is target and data is data. If target does not match the Name production an "InvalidCharacterError" DOMException will be thrown. If data contains "?>" an "InvalidCharacterError" DOMException will be thrown.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `string` |
| `data` | `string` |

#### Returns

`ProcessingInstruction`

#### Inherited from

Document.createProcessingInstruction

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7184

___

### createRange

▸ **createRange**(): `Range`

Returns an empty range object that has both of its boundary points positioned at the beginning of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createRange)

#### Returns

`Range`

#### Inherited from

Document.createRange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7190

___

### createTextNode

▸ **createTextNode**(`data`): `Text`

Creates a text string from the specified value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | String that specifies the nodeValue property of the text node. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTextNode) |

#### Returns

`Text`

#### Inherited from

Document.createTextNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7197

___

### createTreeWalker

▸ **createTreeWalker**(`root`, `whatToShow?`, `filter?`): `TreeWalker`

Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | `Node` | The root element or node to start traversing on. |
| `whatToShow?` | `number` | The type of nodes or elements to appear in the node list. For more information, see whatToShow. |
| `filter?` | ``null`` \| `NodeFilter` | A custom NodeFilter function to use. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker) |

#### Returns

`TreeWalker`

#### Inherited from

Document.createTreeWalker

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7206

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event`\<`EventTarget`\> |

#### Returns

`boolean`

#### Inherited from

Document.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8215

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event`\<`EventTarget`\> |

#### Returns

`boolean`

#### Inherited from

Document.dispatchEvent

#### Defined in

packages/types/node_modules/bun-types/types.d.ts:11929

___

### elementFromPoint

▸ **elementFromPoint**(`x`, `y`): ``null`` \| `Element`

Returns the element for the specified x coordinate and the specified y coordinate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-offset |
| `y` | `number` | The y-offset |

#### Returns

``null`` \| `Element`

#### Inherited from

Document.elementFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7427

___

### elementsFromPoint

▸ **elementsFromPoint**(`x`, `y`): `Element`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`Element`[]

#### Inherited from

Document.elementsFromPoint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7428

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): `XPathResult`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/evaluate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | `Node` |
| `resolver?` | ``null`` \| `XPathNSResolver` |
| `type?` | `number` |
| `result?` | ``null`` \| `XPathResult` |

#### Returns

`XPathResult`

#### Inherited from

Document.evaluate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:26326

___

### execCommand

▸ **execCommand**(`commandId`, `showUI?`, `value?`): `boolean`

Executes a command on the current document, current selection, or the given range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script. |
| `showUI?` | `boolean` | Display the user interface, defaults to false. |
| `value?` | `string` | Value to assign. |

#### Returns

`boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/execCommand)

#### Inherited from

Document.execCommand

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7216

___

### exitFullscreen

▸ **exitFullscreen**(): `Promise`\<`void`\>

Stops document's fullscreen element from being displayed fullscreen and resolves promise when done.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitFullscreen)

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.exitFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7222

___

### exitPictureInPicture

▸ **exitPictureInPicture**(): `Promise`\<`void`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPictureInPicture)

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.exitPictureInPicture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7224

___

### exitPointerLock

▸ **exitPointerLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/exitPointerLock)

#### Returns

`void`

#### Inherited from

Document.exitPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7226

___

### getAnimations

▸ **getAnimations**(): `Animation`[]

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getAnimations)

#### Returns

`Animation`[]

#### Inherited from

Document.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7430

___

### getElementById

▸ **getElementById**(`elementId`): ``null`` \| `HTMLElement`

Returns a reference to the first object with the specified value of the ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementId` | `string` | String that specifies the ID value. |

#### Returns

``null`` \| `HTMLElement`

#### Inherited from

Document.getElementById

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7231

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`\<`Element`\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`\<`Element`\>

#### Inherited from

Document.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7237

___

### getElementsByName

▸ **getElementsByName**(`elementName`): `NodeListOf`\<`HTMLElement`\>

Gets a collection of objects based on the value of the NAME or ID attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elementName` | `string` | Gets a collection of objects based on the value of the NAME or ID attribute. [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByName) |

#### Returns

`NodeListOf`\<`HTMLElement`\>

#### Inherited from

Document.getElementsByName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7244

___

### getElementsByTagName

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`HTMLElementTagNameMap`[`K`]\>

Retrieves a collection of objects based on the specified element name.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7251

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7252

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7253

▸ **getElementsByTagName**\<`K`\>(`qualifiedName`): `HTMLCollectionOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7255

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`\<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`\<`Element`\>

#### Inherited from

Document.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7256

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`HTMLElement`\>

If namespace and localName are "*" returns a HTMLCollection of all descendant elements.

If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.

If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.

Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getElementsByTagNameNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`HTMLElement`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7268

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`SVGElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`SVGElement`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7269

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`\<`MathMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1998/Math/MathML"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`MathMLElement`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7270

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`\<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`\<`Element`\>

#### Inherited from

Document.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7271

___

### getRootNode

▸ **getRootNode**(`options?`): `Node`

Returns node's root.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetRootNodeOptions` |

#### Returns

`Node`

#### Inherited from

Document.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16168

___

### getSelection

▸ **getSelection**(): ``null`` \| `Selection`

Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/getSelection)

#### Returns

``null`` \| `Selection`

#### Inherited from

Document.getSelection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7277

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

Document.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16174

___

### hasFocus

▸ **hasFocus**(): `boolean`

Gets a value indicating whether the object currently has focus.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasFocus)

#### Returns

`boolean`

#### Inherited from

Document.hasFocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7283

___

### hasStorageAccess

▸ **hasStorageAccess**(): `Promise`\<`boolean`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/hasStorageAccess)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

Document.hasStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7285

___

### importNode

▸ **importNode**\<`T`\>(`node`, `deep?`): `T`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

If node is a document or a shadow root, throws a "NotSupportedError" DOMException.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/importNode)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `deep?` | `boolean` |

#### Returns

`T`

#### Inherited from

Document.importNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7293

___

### insertBefore

▸ **insertBefore**\<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| `Node` |

#### Returns

`T`

#### Inherited from

Document.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16176

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Inherited from

Document.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16178

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

Document.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16184

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

Document.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16186

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Document.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16188

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

Document.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16190

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

Document.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16196

___

### open

▸ **open**(`unused1?`, `unused2?`): `Document`

Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unused1?` | `string` |
| `unused2?` | `string` |

#### Returns

`Document`

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7303

▸ **open**(`url`, `name`, `features`): ``null`` \| `Window`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `name` | `string` |
| `features` | `string` |

#### Returns

``null`` \| `Window`

#### Inherited from

Document.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7304

___

### prepend

▸ **prepend**(`...nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

Document.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16795

___

### queryCommandEnabled

▸ **queryCommandEnabled**(`commandId`): `boolean`

Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandEnabled)

#### Inherited from

Document.queryCommandEnabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7312

___

### queryCommandIndeterm

▸ **queryCommandIndeterm**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the specified command is in the indeterminate state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandIndeterm)

#### Inherited from

Document.queryCommandIndeterm

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7320

___

### queryCommandState

▸ **queryCommandState**(`commandId`): `boolean`

Returns a Boolean value that indicates the current state of the command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandState)

#### Inherited from

Document.queryCommandState

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7328

___

### queryCommandSupported

▸ **queryCommandSupported**(`commandId`): `boolean`

Returns a Boolean value that indicates whether the current command is supported on the current range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | Specifies a command identifier. |

#### Returns

`boolean`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandSupported)

#### Inherited from

Document.queryCommandSupported

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7336

___

### queryCommandValue

▸ **queryCommandValue**(`commandId`): `string`

Returns the current value of the document, range, or current selection for the given command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandId` | `string` | String that specifies a command identifier. |

#### Returns

`string`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/queryCommandValue)

#### Inherited from

Document.queryCommandValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7344

___

### querySelector

▸ **querySelector**\<`K`\>(`selectors`): ``null`` \| `HTMLElementTagNameMap`[`K`]

Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `HTMLElementTagNameMap`[`K`]

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16801

▸ **querySelector**\<`K`\>(`selectors`): ``null`` \| `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `SVGElementTagNameMap`[`K`]

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16802

▸ **querySelector**\<`K`\>(`selectors`): ``null`` \| `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `MathMLElementTagNameMap`[`K`]

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16803

▸ **querySelector**\<`K`\>(`selectors`): ``null`` \| `HTMLElementDeprecatedTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `HTMLElementDeprecatedTagNameMap`[`K`]

**`Deprecated`**

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16805

▸ **querySelector**\<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

Document.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16806

___

### querySelectorAll

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`HTMLElementTagNameMap`[`K`]\>

Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16812

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16813

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`MathMLElementTagNameMap`[`K`]\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16814

▸ **querySelectorAll**\<`K`\>(`selectors`): `NodeListOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`\<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16816

▸ **querySelectorAll**\<`E`\>(`selectors`): `NodeListOf`\<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`\<`E`\>

#### Inherited from

Document.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16817

___

### releaseEvents

▸ **releaseEvents**(): `void`

#### Returns

`void`

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/releaseEvents)

#### Inherited from

Document.releaseEvents

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7350

___

### removeChild

▸ **removeChild**\<`T`\>(`child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Document.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16198

___

### removeEventListener

▸ **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `Document`, `ev`: `DocumentEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7369

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

Document.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7370

___

### replaceChild

▸ **replaceChild**\<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

Document.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16200

___

### replaceChildren

▸ **replaceChildren**(`...nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

Document.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16825

___

### requestStorageAccess

▸ **requestStorageAccess**(): `Promise`\<`void`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/requestStorageAccess)

#### Returns

`Promise`\<`void`\>

#### Inherited from

Document.requestStorageAccess

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7352

___

### write

▸ **write**(`...text`): `void`

Writes one or more HTML expressions to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.write

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7359

___

### writeln

▸ **writeln**(`...text`): `void`

Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...text` | `string`[] |

#### Returns

`void`

#### Inherited from

Document.writeln

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7366

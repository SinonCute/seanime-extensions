# Write, test, share

## 1. Create a JS/TS file

<details>

<summary>Shortcut: Use bootstrapping command</summary>

You can use this third-party tool to help you quickly bootstrap a plugin folder locally

```bash
npx seanime-tool g-template
```

</details>

{% code title="my-plugin.ts" %}

```typescript
function init() {
    // This function is called when the plugin is loaded
    // There is no guarantee as to when exactly the plugin will be loaded at startup
}
```

{% endcode %}

## 2. Create a manifest file

{% hint style="warning" %}
The ID should be unique, in case of a conflict with another extension, your plugin might not be loaded.

The name of the file should be the same as the ID.
{% endhint %}

Here we're going with Typescript.

We're setting `isDevelopment`to `true` in order to be able to quickly reload it when we make changes. `payloadURI` in this case is the path to the plugin code, it must be an absolute path.

Obviously, before sharing the extension we'll change the `payloadURI` to the URL of the file containing the code and remove `isDevelopment`.

<pre class="language-json" data-title="my-plugin.json"><code class="lang-json">{
    "id": "my-plugin",
    "name": "My Plugin",
    "version": "1.0.0",
    "manifestURI": "",
    "language": "typescript",
<strong>    "type": "plugin",
</strong>    "description": "An example plugin",
    "author": "Seanime",
    "icon": "",
    "website": "",
    "lang": "multi",
<strong>    "payloadURI": "C:/path/to/my-plugin/code.ts",
</strong>    "plugin": {
        "version": "1",
        "permissions": {}
    },
<strong>    "isDevelopment": true
</strong>}
</code></pre>

## 3. Quick overview

### a. Permissions

Some APIs require specific permissions in order to function.

The user of your plugin will need to **grant** them after the installation.

### b. Hooks

You can register hook callbacks to listen to various types of events happening on the server, modify them or execute custom logic. Learn more about hooks in later sections.

{% hint style="info" %}
**In a nutshell**

Hooks can be used to listen to or edit server-side events.
{% endhint %}

For example:

{% code title="Example" overflow="wrap" %}

```typescript
function init() {
   // This hook is triggered before Seanime formats the library data of an anime
   // The event contains the variables that Seanime will use, and you can modify them
   $app.onAnimeEntryLibraryDataRequested((e) => {
      // Setting this to an empty array will cause Seanime to think that the anime
      // has not been downloaded.
      e.entryLocalFiles = []
      
      e.next() // Continue hook chain
   })
}
```

{% endcode %}

{% hint style="warning" %}
Each hook handler must call `e.next()` in order for the hook chain listening to that event to proceed. Not calling it will impact other plugins listening to that event.
{% endhint %}

### c. UI Context

Hooks are great for customizing server-side behavior but most **business logic** and interface interactions will be done in the UI context.

{% hint style="info" %}
**In a nutshell**

Think of the UI context as the "main thread" of your plugin and hooks can be thought of as "worker threads".
{% endhint %}

Hooks and UI Context can be used alongside each other. In the later section you will learn how communication is done between them.

```typescript
// A simple plugin that stores the history of scan durations
function init() {
    $app.onScanCompleted((e) => {
        // Store the scanning duration (in ms)
        $store.set("scan-completed", e.duration)
        
        e.next()
    })
    
    $ui.register((ctx) => {
    
        // Callback is triggered when the value is updated
        $store.watch<number>("scan-completed", (value) => {
            const now = new Date().toISOString().replaceall(".", "_")
            
            // Add the value to the history
            //   Note that this could have been done in the hook callback BUT
            //   the UI context is better suited for business logic
            $storage.set("scan-duration-history."+now, value)
            
            ctx.toast.info(`Scanning took ${value/1000} seconds!`)
        })
    })
}
```

### d. Javascript restrictions

The UI context and each hook callback are run in isolated environments (called runtimes), and thus, cannot share state easily or read global variables.

{% code overflow="wrap" %}

```typescript
const globalVar = 42;

function init() {
    const value = 42;
    
    $app.onGetAnime((e) => {
        console.log(globalVar) // undefined
        console.log(value) // undefined
    })
    
    $ui.register((ctx) => {
        console.log(globalVar) // undefined
        console.log(value) // undefined
    })
}
```

{% endcode %}

However, you can still share variables between hooks and the UI context using [$store](https://seanime.gitbook.io/seanime-extensions/plugins/apis/store).

{% content-ref url="apis/store" %}
[store](https://seanime.gitbook.io/seanime-extensions/plugins/apis/store)
{% endcontent-ref %}

<figure><img src="https://266901462-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F7Mat9fLDAotSl6o8o4P3%2Fuploads%2F7LbQgNfwe5gmmv7eDKqQ%2Fimg-2025-04-28-10-02-09%402x.png?alt=media&#x26;token=407552a2-42e6-40b3-bb7e-84415c133faf" alt=""><figcaption><p>Diagram of plugin</p></figcaption></figure>

### e. Types

Add the type definition files located here, in addition to `core.d.ts`&#x20;

{% embed url="<https://raw.githubusercontent.com/5rahim/seanime/refs/heads/main/internal/extension_repo/goja_plugin_types/app.d.ts>" %}
app.d.ts
{% endembed %}

{% embed url="<https://raw.githubusercontent.com/5rahim/seanime/refs/heads/main/internal/extension_repo/goja_plugin_types/plugin.d.ts>" %}
plugin.d.ts
{% endembed %}

{% embed url="<https://raw.githubusercontent.com/5rahim/seanime/refs/heads/main/internal/extension_repo/goja_plugin_types/system.d.ts>" %}
system.d.ts
{% endembed %}

{% code title="my-plugin.ts" %}

```typescript
/// <reference path="./plugin.d.ts" />
/// <reference path="./system.d.ts" />
/// <reference path="./app.d.ts" />
/// <reference path="./core.d.ts" />

function init() {
    // Everything is magically typed!
    
    $ui.register((ctx) => {
    
      ctx.dom.onReady(() => {
          console.log("Page loaded!")
      })
      
   })
}
```

{% endcode %}

## 4. Write and test

You're good to go!

### Code the extension

{% content-ref url="apis" %}
[apis](https://seanime.gitbook.io/seanime-extensions/plugins/apis)
{% endcontent-ref %}

{% content-ref url="ui" %}
[ui](https://seanime.gitbook.io/seanime-extensions/plugins/ui)
{% endcontent-ref %}

{% content-ref url="hooks" %}
[hooks](https://seanime.gitbook.io/seanime-extensions/plugins/hooks)
{% endcontent-ref %}

### Test it live

In order to test your plugin, add the manifest file inside the `extensions` directory which is inside your [data directory](https://seanime.rahim.app/docs/config#data-directory).

Because you've set `isDevelopement` to true in your manifest file, you will be able to manually reload the extension without having to restart the app. It's recommended to test your plugin with the web-app version of Seanime for convenience.

## 5. Share

If you want to share your plugin with others, you can host both the code and manifest file on GitHub and [share](https://seanime.rahim.app/community/extensions) the link to the file.

{% hint style="info" %}
Make sure to replace `payloadURI` with the URL of the hosted file containing the code.

Also, remove `isDevelopment` .
{% endhint %}
import{_ as e,o as a,c as t,Q as n}from"./chunks/framework.b67c47e6.js";const g=JSON.parse('{"title":"Management - Company Settings","description":"","frontmatter":{},"headers":[],"relativePath":"guide/management/index.md","filePath":"guide/management/index.md","lastUpdated":1705855462000}'),o={name:"guide/management/index.md"},s=n('<h1 id="management-company-settings" tabindex="-1">Management - Company Settings <a class="header-anchor" href="#management-company-settings" aria-label="Permalink to &quot;Management - Company Settings&quot;">​</a></h1><p>In the company settings view, company managers and admins can tweak several settings.</p><h2 id="main-settings" tabindex="-1">Main settings <a class="header-anchor" href="#main-settings" aria-label="Permalink to &quot;Main settings&quot;">​</a></h2><h3 id="company-info" tabindex="-1">Company info <a class="header-anchor" href="#company-info" aria-label="Permalink to &quot;Company info&quot;">​</a></h3><p>Company info such a as address, name and email are shown on reports, mails and other templates. Company notifications are sent to the &quot;contact email&quot;.</p><h3 id="interface-settings" tabindex="-1">Interface settings <a class="header-anchor" href="#interface-settings" aria-label="Permalink to &quot;Interface settings&quot;">​</a></h3><ul><li>Show QR button: Show a button in the panel viewer that gives the user a QR for the panel.</li><li>Show RFID button: Show a button in the panel viewer that gives the option to register RFID tags.</li><li>Hide &quot;hidden materials&quot; in 3D: Based on the IFC PS config, a part can be detected as hidden material. Those parts can be hidden in the 3D view by default (when you have this checkbox marked).</li><li>Language: This is the default language for the app. Users can change the language if they are allowed by the admin (see the Users table).</li></ul><h2 id="licenses" tabindex="-1">Licenses <a class="header-anchor" href="#licenses" aria-label="Permalink to &quot;Licenses&quot;">​</a></h2><p>Gives a main overview of the licensing.</p><h2 id="styles" tabindex="-1">Styles <a class="header-anchor" href="#styles" aria-label="Permalink to &quot;Styles&quot;">​</a></h2><p>Corporate color and logos can be changed. Those will be used also in PDF generation. Sticker banner is a wide logo to be used in some of the sticker presets (like panel QR stickers).</p><h2 id="projects" tabindex="-1">Projects <a class="header-anchor" href="#projects" aria-label="Permalink to &quot;Projects&quot;">​</a></h2><p>Projects are fabrication sets that we recommend don&#39;t get more than 100 designs and 500 panels for performance reasons. The more panels in a project, the slower the interface gets.</p><p>We know that there are some large or very large projects that doesn&#39;t fit on those numbers, so we introduced the &quot;superproject&quot; parameter, so you can group several projects under the same key name. For example, you may have a big project with 10 buildings, and you may want to split it into 10 projects that belong to the same superproject.</p><p>Projects can be &quot;archived&quot; 🗃. Archived project are hidden from the user, and only visible in the archive. We plan a feature to export all the information of an archived project in a .zip file.</p><h2 id="users" tabindex="-1">Users <a class="header-anchor" href="#users" aria-label="Permalink to &quot;Users&quot;">​</a></h2><h3 id="user-form" tabindex="-1">User form <a class="header-anchor" href="#user-form" aria-label="Permalink to &quot;User form&quot;">​</a></h3><ul><li>🌐 <strong>Multilanguage</strong>: User can change language of the interface.</li><li>👁 <strong>Hide panel queue</strong>: If checked, can see only designs mode in the viewer, not the panel list.</li><li>🔃 <strong>Can change station</strong>: User can change him/herself to other station.</li><li>🌴 <strong>Has own holydays</strong>: If checked, user doesn&#39;t get the company holydays. System only takes own holydays.</li><li>🔨 <strong>Has own worktime</strong>: If checked, own entries have priority over company entries. This means that if you set a worktime with start and end date, all days outside this range will take company worktime.</li></ul><div class="info custom-block"><p class="custom-block-title">Work Calendar</p><p>More about holydays and worktime in <a href="#work-calendar">Work Calendar</a></p></div><h2 id="machines" tabindex="-1">Machines <a class="header-anchor" href="#machines" aria-label="Permalink to &quot;Machines&quot;">​</a></h2><p>Setup of machines and stations of staged machines (such as a mobi-one).</p>',21),i=[s];function r(h,l,c,d,m,p){return a(),t("div",null,i)}const f=e(o,[["render",r]]);export{g as __pageData,f as default};
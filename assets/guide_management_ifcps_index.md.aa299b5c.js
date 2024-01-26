import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.b67c47e6.js";const f=JSON.parse('{"title":"IFC Parsing Setup (IFC PS)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/management/ifcps/index.md","filePath":"guide/management/ifcps/index.md","lastUpdated":1705855462000}'),o={name:"guide/management/ifcps/index.md"},i=r('<h1 id="ifc-parsing-setup-ifc-ps" tabindex="-1">IFC Parsing Setup (IFC PS) <a class="header-anchor" href="#ifc-parsing-setup-ifc-ps" aria-label="Permalink to &quot;IFC Parsing Setup (IFC PS)&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">IFC Standard</p><p>The IFC standard is quite open and versatile. Each BIM application exports IFCs in its own way. Usually, it&#39;s not straightforward to detect things in IFC files. This is why we need IFC PSs.</p></div><p>The <strong>IFC PS</strong> is the information we need to <strong>understand your IFCs</strong>. A company can have several IFC PSs. You will need to select one of your IFC PSs for each project.</p><p>There are two types of entries in a IFC PS:</p><ul><li><strong>Part categories</strong>: Those are entries we need to classify parts into categories (wood profiles, plates, nail lines, ...)</li><li><strong>Part properties</strong>: Those are entries that help us find property values in parts (a zone, a milling depth, ...)</li></ul><div class="warning custom-block"><p class="custom-block-title">IFC props and values</p><p>Usually, our system tries to detect part names and values with a <strong>case insensitive</strong> criteria. So, for us, it&#39;s the same &quot;Reference&quot;, &quot;REFERENCE&quot; and &quot;reference&quot;.</p></div><h3 id="part-categories" tabindex="-1">Part categories <a class="header-anchor" href="#part-categories" aria-label="Permalink to &quot;Part categories&quot;">​</a></h3><p>For each category you have to add one or more entries that need to match somehow the information of your parts. Each entry has:</p><ul><li><strong>IFC Prop</strong>: The IFC property to look into.</li><li><strong>Type of match</strong>: Whether we need to find values that match exactly or only the prefix.</li><li><strong>Value</strong>: The value to look for in the property.</li></ul><div class="tip custom-block"><p class="custom-block-title">Example</p><p>If you add following entries to the &quot;Top Rail&quot; category:</p><table><thead><tr><th>IFC Prop</th><th>Match</th><th>Value</th></tr></thead><tbody><tr><td>REFERENCE</td><td>ALL</td><td>TOPRAIL</td></tr><tr><td>REFERENCE</td><td>PREFIX</td><td>TR</td></tr></tbody></table><p>The system will consider as Top Rails parts with &quot;REFERENCE&quot; values such as: <strong>TOPRAIL</strong>, <strong>TR</strong>12, <strong>TR</strong>, <strong>TR</strong>45.</p><p>But will never detect: TOPRAIL2, TOP_RAIL, 12TR.</p></div><h4 id="top-rail-wood" tabindex="-1">Top Rail Wood <a class="header-anchor" href="#top-rail-wood" aria-label="Permalink to &quot;Top Rail Wood&quot;">​</a></h4><p>The top rail of a panel.</p><h4 id="bottom-rail-wood" tabindex="-1">Bottom Rail Wood <a class="header-anchor" href="#bottom-rail-wood" aria-label="Permalink to &quot;Bottom Rail Wood&quot;">​</a></h4><p>The bottom rail of a panel.</p><h4 id="extra-top-wood" tabindex="-1">Extra Top Wood <a class="header-anchor" href="#extra-top-wood" aria-label="Permalink to &quot;Extra Top Wood&quot;">​</a></h4><p>Woods over the top rail, usually built after nailing the studs.</p><h4 id="extra-bottom-wood" tabindex="-1">Extra Bottom Wood <a class="header-anchor" href="#extra-bottom-wood" aria-label="Permalink to &quot;Extra Bottom Wood&quot;">​</a></h4><p>Woods below the bottom rail, usually built after nailing the studs.</p><h4 id="wood-profile" tabindex="-1">Wood profile <a class="header-anchor" href="#wood-profile" aria-label="Permalink to &quot;Wood profile&quot;">​</a></h4><p>Other wood profile parts.</p><h4 id="plate" tabindex="-1">Plate <a class="header-anchor" href="#plate" aria-label="Permalink to &quot;Plate&quot;">​</a></h4><p>Plates in a panel.</p><h4 id="frame-nail-lines" tabindex="-1">Frame Nail Lines <a class="header-anchor" href="#frame-nail-lines" aria-label="Permalink to &quot;Frame Nail Lines&quot;">​</a></h4><p>Nails in plates. Group of frame nails represented as a line. The line goes through the heads of the nails.</p><h4 id="frame-nail-singles" tabindex="-1">Frame Nail Singles <a class="header-anchor" href="#frame-nail-singles" aria-label="Permalink to &quot;Frame Nail Singles&quot;">​</a></h4><p>Nails in frame. Single nail represented as line. The line goes through the body of the nail.</p><h4 id="plate-nail-lines" tabindex="-1">Plate Nail Lines <a class="header-anchor" href="#plate-nail-lines" aria-label="Permalink to &quot;Plate Nail Lines&quot;">​</a></h4><p>Nails in plates. Group of frame nails represented as a line. The line goes through the heads of the nails.</p><h4 id="milling" tabindex="-1">Milling <a class="header-anchor" href="#milling" aria-label="Permalink to &quot;Milling&quot;">​</a></h4><p>Milling lines.</p><h4 id="plate-screw" tabindex="-1">Plate Screw <a class="header-anchor" href="#plate-screw" aria-label="Permalink to &quot;Plate Screw&quot;">​</a></h4><p>Lines representing screws in the same way as the &quot;Frame Nail Lines&quot;.</p><h4 id="sawing" tabindex="-1">Sawing <a class="header-anchor" href="#sawing" aria-label="Permalink to &quot;Sawing&quot;">​</a></h4><p>Sawing lines.</p><h4 id="hidden-material" tabindex="-1">Hidden Material <a class="header-anchor" href="#hidden-material" aria-label="Permalink to &quot;Hidden Material&quot;">​</a></h4><p>Hidden materials, that can be hidden in the 3D viewer if configured this way in the <a href="#interface-settings">interface settings</a>.</p><h4 id="glue-lines" tabindex="-1">Glue lines <a class="header-anchor" href="#glue-lines" aria-label="Permalink to &quot;Glue lines&quot;">​</a></h4><p>Glue lines for bricks.</p><h4 id="bricks-stones" tabindex="-1">Bricks / Stones <a class="header-anchor" href="#bricks-stones" aria-label="Permalink to &quot;Bricks / Stones&quot;">​</a></h4><p>Single bricks/stones.</p><h3 id="part-properties" tabindex="-1">Part properties <a class="header-anchor" href="#part-properties" aria-label="Permalink to &quot;Part properties&quot;">​</a></h3><p>This is simpler than categories. Foe each prop we need one or more entries that tell us what is the property name to look for.</p><p>Each entry needs only an <strong>IFC Prop</strong>.</p><div class="tip custom-block"><p class="custom-block-title">Example</p><p>If you add following entries to the &quot;Zone&quot; property:</p><table><thead><tr><th>IFC Prop</th></tr></thead><tbody><tr><td>WorkPlane</td></tr><tr><td>Layer</td></tr></tbody></table><p>The system will find the following zones for each part:</p><table><thead><tr><th>Part</th><th>&quot;WorkPlane&quot;</th><th>&quot;Layer&quot;</th><th>Detected Zone</th></tr></thead><tbody><tr><td>P1</td><td>1</td><td>2</td><td>1</td></tr><tr><td>P2</td><td>UNDEFINED</td><td>3</td><td>3</td></tr><tr><td>P3</td><td>1</td><td>UNDEFINED</td><td>1</td></tr></tbody></table><p>It picks the first that matches.</p></div><h4 id="zone-layer" tabindex="-1">Zone (layer) <a class="header-anchor" href="#zone-layer" aria-label="Permalink to &quot;Zone (layer)&quot;">​</a></h4><p>The part panel zone/layer.</p><h4 id="reference-we-expect-same-reference-for-same-shape" tabindex="-1">Reference (we expect same reference for same shape) <a class="header-anchor" href="#reference-we-expect-same-reference-for-same-shape" aria-label="Permalink to &quot;Reference (we expect same reference for same shape)&quot;">​</a></h4><p>This is an ID that&#39;s expected to be the same across parts with the same shape. It&#39;s usually generated as &quot;reference&quot; in Tekla Structures but can exist in other applications IFCs</p><h4 id="nail-screw-ctc" tabindex="-1">Nail/Screw CTC <a class="header-anchor" href="#nail-screw-ctc" aria-label="Permalink to &quot;Nail/Screw CTC&quot;">​</a></h4><p>The Center-to-center distance in nail and screw lines.</p><h4 id="mill-saw-depth" tabindex="-1">Mill/Saw depth <a class="header-anchor" href="#mill-saw-depth" aria-label="Permalink to &quot;Mill/Saw depth&quot;">​</a></h4><p>The milling/saw depth in a milling and sawing line.</p><h4 id="brick-type" tabindex="-1">Brick Type <a class="header-anchor" href="#brick-type" aria-label="Permalink to &quot;Brick Type&quot;">​</a></h4><p>The type of the brick.</p><h4 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h4><p>Comment of the part.</p><h4 id="finish" tabindex="-1">Finish <a class="header-anchor" href="#finish" aria-label="Permalink to &quot;Finish&quot;">​</a></h4><p>Finish of the part.</p><h4 id="bricks-machine-brick-flag" tabindex="-1">Bricks: Machine Brick Flag <a class="header-anchor" href="#bricks-machine-brick-flag" aria-label="Permalink to &quot;Bricks: Machine Brick Flag&quot;">​</a></h4><p>Brick that is not manual but machine built.</p><h4 id="milling-v-mill-flag" tabindex="-1">Milling: V-Mill Flag <a class="header-anchor" href="#milling-v-mill-flag" aria-label="Permalink to &quot;Milling: V-Mill Flag&quot;">​</a></h4><p>Milling line that needs to be done as V-Mill.</p>',62),l=[i];function n(s,h,d,p,c,u){return a(),t("div",null,l)}const b=e(o,[["render",n]]);export{f as __pageData,b as default};
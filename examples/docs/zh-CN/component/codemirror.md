<script>
  import 'codemirror/mode/sql/sql.js'
  import 'codemirror/theme/rubyblue.css'

  import 'codemirror/mode/xml/xml.js'
  import 'codemirror/theme/ambiance.css'
  import 'codemirror/addon/selection/active-line.js'
  import 'codemirror/addon/edit/closetag.js'

  export default {
    data() {
const sqlCode =
`
-- SQL Mode for CodeMirror
SELECT SQL_NO_CACHE DISTINCT
    @var1 AS \`val1\`, @'val2', @global.'sql_mode',
    1.1 AS \`float_val\`, .14 AS \`another_float\`, 0.09e3 AS \`int_with_esp\`,
    0xFA5 AS \`hex\`, x'fa5' AS \`hex2\`, 0b101 AS \`bin\`, b'101' AS \`bin2\`,
    DATE '1994-01-01' AS \`sql_date\`, { T "1994-01-01" } AS \`odbc_date\`,
    'my string', _utf8'your string', N'her string',
        TRUE, FALSE, UNKNOWN
  FROM DUAL
  -- space needed after '--'
  # 1 line comment
  /* multiline
  comment! */
  LIMIT 1 OFFSET 0;
`

const htmlCode =
`<html style="color: green">
  <!-- this is a comment -->
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <!-- 可以尝试输入<p>，会自动补全 -->
    <!-- 下翻，尝试删除外文，你会发现编辑器支持语言反转 -->
    The indentation tries to be <em>somewhat &amp;quot;do what
    I mean&amp;quot;</em>... but might not match your style.
    <!-- Piece of the CodeMirror manual, 'translated' into Arabic by Google Translate -->
    <dl>
      <dt id=option_value><code>value (string or Doc)</code></dt>
      <dd>قيمة البداية المحرر. يمكن أن تكون سلسلة، أو. كائن مستند.</dd>
      <dt id=option_mode><code>mode (string or object)</code></dt>
      <dd>وضع الاستخدام. عندما لا تعطى، وهذا الافتراضي إلى الطريقة الاولى
      التي تم تحميلها. قد يكون من سلسلة، والتي إما أسماء أو ببساطة هو وضع
      MIME نوع المرتبطة اسطة. بدلا من ذلك، قد يكون من كائن يحتوي على
      خيارات التكوين لواسطة، مع <code>name</code> الخاصية التي وضع أسماء
      (على سبيل المثال <code>{name: "javascript", json: true}</code>).
      صفحات التجريبي لكل وضع تحتوي على معلومات حول ما معلمات تكوين وضع
      يدعمها. يمكنك أن تطلب CodeMirror التي تم تعريفها طرق وأنواع MIME
      الكشف على <code>CodeMirror.modes</code>
      و <code>CodeMirror.mimeModes</code> الكائنات. وضع خرائط الأسماء
      الأولى لمنشئات الخاصة بهم، وخرائط لأنواع MIME 2 المواصفات
      واسطة.</dd>
      <dt id=option_theme><code>theme (string)</code></dt>
      <dd>موضوع لنمط المحرر مع. يجب عليك التأكد من الملف CSS تحديد
      المقابلة <code>.cm-s-[name]</code> يتم تحميل أنماط (انظر
      <a href="../theme/"><code>theme</code></a> الدليل في التوزيع).
      الافتراضي هو <code>"default"</code> ، والتي تم تضمينها في
      الألوان <code>codemirror.css</code>. فمن الممكن استخدام فئات متعددة
      في تطبيق السمات مرة واحدة على سبيل المثال <code>"foo bar"</code>
      سيتم تعيين كل من <code>cm-s-foo</code> و <code>cm-s-bar</code>
      الطبقات إلى المحرر.</dd>
    </dl>
  </body>
</html>
`
      return {
        sqlCode,
        sqlOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-mysql',
          theme: 'rubyblue'
        },
        htmlCode,
        htmlOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          autoCloseTags: true,
          line: true,
          mode: 'text/html',
          theme: 'ambiance'
        }
      }
    }
  }
</script>

## Codemirror Edit
根据 `codemirror` 封装的 Vue 版 codemirror，支持 codemirror 所支持的所有语言编辑模式。
所有的配置选项通过 options 对象传递。具体 options 配置方法参考 [codemirror](http://codemirror.net/doc/manual.html#config)


:::tip
当用到 ElCodemirror 组件时，需要在项目中安装 `npm install codemirror --save` 依赖，来获取语言和主题文件。
:::

### SQL 
SQL 语法编辑器

:::demo options 具体配置可参考 `codemirror` 官方文档。

```html
<template>
  <el-codemirror v-model="sqlCode" :options="sqlOption"></el-codemirror>
</template>
<script>
  // 根据 option 的 mode 导入对应的模式
  import 'codemirror/mode/sql/sql.js'
  // 根据 option 的 theme 导入对应的主题
  import 'codemirror/theme/rubyblue.css'

  export default {
    data() {
const sqlCode =
`
-- SQL Mode for CodeMirror
SELECT SQL_NO_CACHE DISTINCT
    @var1 AS \`val1\`, @'val2', @global.'sql_mode',
    1.1 AS \`float_val\`, .14 AS \`another_float\`, 0.09e3 AS \`int_with_esp\`,
    0xFA5 AS \`hex\`, x'fa5' AS \`hex2\`, 0b101 AS \`bin\`, b'101' AS \`bin2\`,
    DATE '1994-01-01' AS \`sql_date\`, { T "1994-01-01" } AS \`odbc_date\`,
    'my string', _utf8'your string', N'her string',
        TRUE, FALSE, UNKNOWN
  FROM DUAL
  -- space needed after '--'
  # 1 line comment
  /* multiline
  comment! */
  LIMIT 1 OFFSET 0;
`
      return {
        sqlCode,
        sqlOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          line: true,
          mode: 'text/x-mysql',
          theme: 'rubyblue'
        }
      }
    }
  }
</script>
```
:::


### HTML 
HTML 语法编辑器

:::demo options 具体配置可参考 `codemirror` 官方文档。 。

```html
<template>
  <el-codemirror v-model="htmlCode" :options="htmlOption"></el-codemirror>
</template>
<script>
  // 根据 option 的 mode 导入对应的模式
  import 'codemirror/mode/sql/sql.js'
  // 根据 option 的 theme 导入对应的主题
  import 'codemirror/theme/rubyblue.css'

  export default {
    data() {
const htmlCode =
`<html style="color: green">
  <!-- this is a comment -->
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <!-- 可以尝试输入<p>，会自动补全 -->
    <!-- 下翻，尝试删除外文，你会发现编辑器支持语言反转 -->
    The indentation tries to be <em>somewhat &amp;quot;do what
    I mean&amp;quot;</em>... but might not match your style.
    <!-- Piece of the CodeMirror manual, 'translated' into Arabic by Google Translate -->
    <dl>
      <dt id=option_value><code>value (string or Doc)</code></dt>
      <dd>قيمة البداية المحرر. يمكن أن تكون سلسلة، أو. كائن مستند.</dd>
      <dt id=option_mode><code>mode (string or object)</code></dt>
      <dd>وضع الاستخدام. عندما لا تعطى، وهذا الافتراضي إلى الطريقة الاولى
      التي تم تحميلها. قد يكون من سلسلة، والتي إما أسماء أو ببساطة هو وضع
      MIME نوع المرتبطة اسطة. بدلا من ذلك، قد يكون من كائن يحتوي على
      خيارات التكوين لواسطة، مع <code>name</code> الخاصية التي وضع أسماء
      (على سبيل المثال <code>{name: "javascript", json: true}</code>).
      صفحات التجريبي لكل وضع تحتوي على معلومات حول ما معلمات تكوين وضع
      يدعمها. يمكنك أن تطلب CodeMirror التي تم تعريفها طرق وأنواع MIME
      الكشف على <code>CodeMirror.modes</code>
      و <code>CodeMirror.mimeModes</code> الكائنات. وضع خرائط الأسماء
      الأولى لمنشئات الخاصة بهم، وخرائط لأنواع MIME 2 المواصفات
      واسطة.</dd>
      <dt id=option_theme><code>theme (string)</code></dt>
      <dd>موضوع لنمط المحرر مع. يجب عليك التأكد من الملف CSS تحديد
      المقابلة <code>.cm-s-[name]</code> يتم تحميل أنماط (انظر
      <a href="../theme/"><code>theme</code></a> الدليل في التوزيع).
      الافتراضي هو <code>"default"</code> ، والتي تم تضمينها في
      الألوان <code>codemirror.css</code>. فمن الممكن استخدام فئات متعددة
      في تطبيق السمات مرة واحدة على سبيل المثال <code>"foo bar"</code>
      سيتم تعيين كل من <code>cm-s-foo</code> و <code>cm-s-bar</code>
      الطبقات إلى المحرر.</dd>
    </dl>
  </body>
</html>
`
      return {
        htmlCode,
        htmlOption: {
          tabSize: 4,
          styleActiveLine: true,
          lineNumbers: true,
          autoCloseTags: true,
          line: true,
          mode: 'text/html',
          theme: 'ambiance'
        }
      }
    }
  }
</script>
```
:::

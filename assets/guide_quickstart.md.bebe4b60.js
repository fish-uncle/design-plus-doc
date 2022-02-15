import{_ as n,c as s,o as a,e as t}from"./app.e82ad5d2.js";const m='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165"},{"level":2,"title":"\u6309\u9700\u5BFC\u5165","slug":"\u6309\u9700\u5BFC\u5165"}],"relativePath":"guide/quickstart.md","lastUpdated":1644887293044}',p={},o=t(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 design-plus\u3002</p><h2 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p><div class="language-typescript"><pre><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> designPlus <span class="token keyword">from</span> <span class="token string">&#39;design-plus&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;design-plus/umd/style.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>designPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6309\u9700\u5BFC\u5165" tabindex="-1">\u6309\u9700\u5BFC\u5165 <a class="header-anchor" href="#\u6309\u9700\u5BFC\u5165" aria-hidden="true">#</a></h2><p>\u60A8\u9700\u8981\u4F7F\u7528\u989D\u5916\u7684\u63D2\u4EF6\u6765\u5BFC\u5165\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\u3002</p><p>\u9996\u5148\uFF0C\u5B89\u88C5 babel-plugin-component</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-component -D
</code></pre></div><p>\u7136\u540E\uFF0C\u5C06 .babelrc \u4FEE\u6539\u4E3A\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	  <span class="token punctuation">[</span>
		  <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span>
		  <span class="token punctuation">{</span>
			  <span class="token property">&quot;libraryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;design-plus&quot;</span><span class="token punctuation">,</span>
			  <span class="token property">&quot;libDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es&quot;</span>
		  <span class="token punctuation">}</span>
	  <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>d-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">round</span><span class="token punctuation">&gt;</span></span>\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>d-button</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;design-plus&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
	components<span class="token operator">:</span> <span class="token punctuation">{</span>
		DButton<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};

{{!
	The structure for a single blog post.
	NOTE: "blog-title" is a required class to guarantee that the title is editable.
}}
<article id="blog-post-{{id}}" class="blog-post">

	{{#custom_header_html}}
		<div class="blog-post-header">{{{.}}}</div>
	{{/custom_header_html}}

	<div class="blog-header">
		<h1 class="blog-title">
			{{{title_html}}}
		</h1>
		<p class="blog-date">
			{{{date_html}}}
		</p>
		<p class="blog-comments">
			{{{comment_count_html}}}
		</p>
	</div>

	<!-- <div class="blog-separator">&nbsp;</div> -->

	<div class="blog-content">
		{{{body_html}}}
	</div>

	{{#custom_footer_html}}
		<div class="blog-post-footer">{{{.}}}</div>
	{{/custom_footer_html}}

	{{{social_html}}}

	<!-- <div class="blog-comments-bottom">
		{{{comment_count_html}}}
	</div> -->

</article>

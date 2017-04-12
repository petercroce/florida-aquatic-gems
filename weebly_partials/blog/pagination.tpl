{{!
	In the blog post list, the area with "previous" and "next" links that enable
	the user to navigate to forward/backward in the list.
}}
<div class="pagination">
  {{#previous_url}}
		<a href="{{previous_url}}" class="blog-link blog-previous">Older Posts</a>
  {{/previous_url}}

  {{#next_url}}
		<a href="{{next_url}}" class="blog-link blog-next">Newer Posts</a>
  {{/next_url}}
</div>

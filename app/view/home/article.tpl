{% extends "parent.tpl" %}

{% block head %}
<title>文章内容</title>
{% endblock %}

{% block content %}
<div class="home">
    {{list.detail | safe }}
</div>
{% endblock %}

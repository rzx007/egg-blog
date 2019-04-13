{% extends "parent.tpl" %}

{% block head %}
<title>{{list.title}}</title>
{% endblock %}

{% block content %}
<div class="home">
    <div class="passage-meta">
       <span><i class="iconfont">&#xe66c;</i>{{list.create_time}} </span>
        <span>|<i class="iconfont">&#xe61d;</i> 
            {% if list.invisible %}
            UNLOCK
            {% else %}
            LOCK
            {% endif %}
        </span>
    </div>
    <h1 class="article_title">{{list.title}}</h1>
    <div class="article_content">
        {{list.content | safe }}
    </div>
</div>
{% endblock %}

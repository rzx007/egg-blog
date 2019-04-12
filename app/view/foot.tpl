<div class="bottom-bar">
    <div class="bottom-bar-left">
        {% if pageIndex<=1 %}
        <a class="awrrow go_back iconfont forbind" href="javascript:void()">&#xe64f;</a>
        {% else %}
        <a class="awrrow go_back iconfont" href="/?page={{(pageIndex | int-1)}}">&#xe64f;</a>
        {% endif %}
        {% if pageIndex<pageNum %}
        <a class="awrrow go_forward iconfont " href="/?page={{(pageIndex | int+1)}}">&#xe615;</a>
        {% else %}
        <a class="awrrow go_back iconfont forbind" href="javascript:void()">&#xe615;</a>
        {% endif %}
        
    </div>
    <div class="bottom-bar-right">
        <span class="awrrow go_forward iconfont" id="to_top">&#xe74c;</span>
    </div>
</div>
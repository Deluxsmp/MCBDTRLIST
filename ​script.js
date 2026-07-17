
    function showWebsite() {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }

    function liveSearch() {
        var input = document.getElementById('tierSearch').value.toUpperCase();
        var rows = document.getElementsByClassName('player-row-item');
        for (var i = 0; i < rows.length; i++) {
            var name = rows[i].getElementsByClassName('player-name')[0].innerText;
            rows[i].style.display = name.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }


var Spectacle = function() {
    // Change how moment displays short times - we won't be accurate because of 
    // time zone differences anyway...
    this.setDates();
};

Spectacle.prototype.setDates = function() {
    $("time[data-need-fill=true]").text(function(index, text) {
        var date = moment($(this).attr("datetime"), "YYYY-MM-DD");

        if (date >= moment().startOf("day")) {
            return "Today";
        }
        else if (date >= moment().startOf("day").subtract("days", 1)) {
            return "Yesterday";
        }
        else {
            var dateString = date.fromNow();
            return dateString.charAt(0).toUpperCase() + dateString.slice(1);
        }
    });
}

$(document).ready(function() {
    var spectacle = new Spectacle();
})

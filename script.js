$(document).ready(function() {
      document.getElementById("bio").required = true;
        document.getElementById("que").required = true;
    $(".preferenceSelect").change(function() {
        // Get the selected value
        var selected = $("option:selected", $(this)).val();
        // Get the ID of this element
        var thisID = $(this).attr("id");
        // Reset so all values are showing:
        $(".preferenceSelect option").each(function() {
            $(this).show();
        });
        $(".preferenceSelect").each(function() {
            if ($(this).attr("id") != thisID) {
                $("option[value='" + selected + "']", $(this)).hide();
            }
        });
        var p1 = document.getElementById('Preference_1').value;
        var p2 = document.getElementById('Preference_2').value;
        var p3 = document.getElementById('Preference_3').value;

        if(p1 == p2 || p1 == p3 || p2 == p3)
        {
            alert("Please select different preferences!");
            if(p1 == p2)
            {
                document.getElementById('Preference_2').value = 2;
            }
            if(p1 == p3)
            {
                document.getElementById('Preference_3').value = 3;
            }
            if(p2 == p3)
            {
                document.getElementById('Preference_3').value = 3;
            }
        }
    });
});
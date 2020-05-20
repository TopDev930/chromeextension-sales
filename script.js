var data_sid_ofFancy;

var text_data = {
    "data": [{
            "reason1": "No Show",
            "reason2": [{
                    "text": "The prospect was hungover",
                    "data": [
                        "Literally, the prospect did not show for the meeting. I don’t know why.",
                        "I don’t really think they were hungover. But they didn’t show up! Ahhhh.",
                        "Monday morning meetings can be tough. No shows are also tough."
                    ]
                },
                {
                    "text": "The prospect went on vacation",
                    "data": [
                        "The prospect either forgot about this meeting or intentionally skipped it.",
                        "A clear case of OOO — maybe not a vacation per se, but not available!",
                        "Vacations are fun. But when you have a meeting scheduled — not cool."
                    ]
                },
                {
                    "text": "The prospect forgot to put on the calendar",
                    "data": [
                        "Forgot to add to calendar? Maybe they put meeting on wrong calendar?",
                        "You know the old saying, “If it’s not on the calendar, it’ll never happen.”",
                        "Online calendars are super-valuable ... IF you put appointments on them."
                    ]
                }
            ]
        },
        {
            "reason1": "Bad Fit or Poor Qualification",
            "reason2": [{
                    "text": "We are too innovative for the prospect",
                    "data": [
                        "Not everyone appreciates our rapid growth and innovation. Bad fit?",
                        "Our product is just that good. So good it just wasn’t a good fit.",
                        "Bad fit or poor qualification? Either way, we are just too dang innovative!"
                    ]
                },
                {
                    "text": "I just finished eating Thanksgiving dinner",
                    "data": [
                        "While it’s true I eat Turkey-Day Dinner on the reg, this deal was not a good fit",
                        "Yes, I love eating turkey, but this deal was simply not a good fit.",
                        "Thanksgiving Dinner? The best. But this deal was just not a good fit."
                    ]
                },
                {
                    "text": "My jeans are too skinny",
                    "data": [
                        "While my jeans MAY be too skinny, this deal was just not a good fit.",
                        "Small jeans are not good. Neither is a deal that’s a bad fit.",
                        "The only thing worse than poorly fitting jeans? A deal that’s a bad fit."
                    ]
                },
            ]
        },
        {
            "reason1": "Unresponsive",
            "reason2": [{
                    "text": "OOO Bounce Back",
                    "data": [
                        "I think I got ghosted. No return call. No email reply. Nada. Nothing. Zilch.",
                        "Out of office? But they were just “in the office” this morning. #Ghosted",
                        "It’s almost as if they put that OOO message out there just for me."
                    ]
                },
                {
                    "text": "Prospect Left the Company",
                    "data": [
                        "The only explanation I have is that they are no longer with the company",
                        "Email address didn’t bounce, but maybe they left the company? Hmmm.",
                        "No response. Maybe they left the company for greener pastures?"
                    ]
                },
                {
                    "text": "Prospect is in a New Role",
                    "data": [
                        "They must have changed roles within the org. That’s the only explanation!.",
                        "Ignoring me? How dare they! Maybe they changed roles within the org.",
                        "Unresponsive? They must have changed roles. Right? Only explanation."
                    ]
                },
            ]
        },
        {
            "reason1": "Price",
            "reason2": [{
                    "text": "Customer is too cheap",
                    "data": [
                        "They can’t afford us. We are competitively priced, but still too expensive!",
                        "Maybe they are not really cheap, but they said we were too pricey for them.",
                        "They aren’t really cheap, but we did lose them based on our pricing."
                    ]
                },
                {
                    "text": "The competition is too cheap",
                    "data": [
                        "We just can’t compete with the competition. They are loss leaders. Lost on price",
                        "How can our competitors sell their stuff so cheaply? Lost this one on price.",
                        "It is not that OUR pricing is too high; our competitor’s pricing is just too low."
                    ]
                },
                {
                    "text": "We are too cheap",
                    "data": [
                        "Do they want to pay us MORE money? Not really, but we lost this deal on price.",
                        "It’s not us, it’s them. They are too cheap. Or is it because we are too pricey?",
                        "Can we really be TOO cheap? Probably not, but it feels that way."
                    ]
                },
            ]
        },
        {
            "reason1": "Budget",
            "reason2": [{
                    "text": "They forgot to put technology in their budget this year",
                    "data": [
                        "I hate it when that happens. They have a budget, but not enough for tech!",
                        "How you do you forget to put tech in your budget? Well, it happened. I think.",
                        "Literally, they forgot. I’m sure they had good intentions, but it slipped their mind."
                    ]
                },
                {
                    "text": "Their budget had a decimal place in the wrong spot",
                    "data": [
                        "Grammar matters. Spelling matters. Oh, and certainly decimal places matter!",
                        "A $1,000,000 budget can shrink quickly to $10 if your decimal place is off.",
                        "If only that had moved that decimal point to the RIGHT instead of the LEFT!"
                    ]
                }
            ]
        },
        {
            "reason1": "No decision",
            "reason2": [{
                    "text": "This prospect is very indecisive",
                    "data": [
                        "Flip a coin! But which coin? A penny? A nickel? A dime? A quarter? #CannotDecide",
                        "Just. Too. Many. Options. They could not decide; therefore it’s a no.",
                        "They told me to decide for them! Then they changed their mind. #SoftNo"
                    ]
                },
                {
                    "text": "This prospect just can’t make a decision.",
                    "data": [
                        "Yes. No. No. Yes. Maybe yes. Maybe no. Just maybe? They can’t decide!",
                        "They said, “I’m 100% certain that I’m 0% sure what to do. Ahhhhhhh.",
                        "To buy or not to buy. That is the question. So ... well ... not buy."
                    ]
                }
            ]
        },
        {
            "reason1": "Competition",
            "reason2": [{
                    "text": "Our competitor is just better than us - you know it",
                    "data": [
                        "No, I don’t really think our competitor is better than us, but it felt like that.",
                        "We are the best! We are the best! Or are we? Maybe our competitor is better?",
                        "Can it be true? Can our competition just be better than us? Proly not."
                    ]
                },
                {
                    "text": "I want to get a job with our competitor",
                    "data": [
                        "Of COURSE, I don’t want to get a job with our competitor. I mean ...",
                        "They choose “them” over “us.” Sad face. Maybe I’ll go work for our competitor",
                        "Fine. I won’t really go work for our competitor, but we did lose this deal to them."
                    ]
                }
            ]
        },
        {
            "reason1": "Feature",
            "reason2": [{
                    "text": "Customer needed a specific feature we didn’t have",
                    "data": [
                        "If we just had that ONE feature, all would be fine. Right? Right? Hmmm.",
                        "Hurry up and build that ONE feature for this ONE (potential) customer.",
                        "ONE feature. That’s it. Just ONE. If we only had that ONE feature ..."
                    ]
                },
                {
                    "text": "Product isn’t developing new features fast enough",
                    "data": [
                        "The prospect wants “all the features” ... now. Like right now. Got it?",
                        "Faster. Faster. Faster. Our product just is not developing new features fast enough.",
                        "“GIVE ME ALL THE NEW FEATURES NOW” — said, this prospect, just now."
                    ]
                },
                {
                    "text": "We have too many awesome features",
                    "data": [
                        "We have so many great features this prospect was overwhelmed and said no.",
                        "When you are so good — too good — sometimes prospects just say no.",
                        "It’s not that we were MISSING a feature; we just had so many good ones."
                    ]
                }
            ]
        },
        {
            "reason1": "Force Majeure",
            "reason2": [{
                    "text": "Prospect Died",
                    "data": [
                        "Nobody really died (not that I’m aware of), but something changed. Out of my control",
                        "Death is the only explanation. Know what I mean? Get ‘em next time.",
                        "I can’t imagine they really died, but it sure feels like it. Out of my control!"
                    ]
                },
                {
                    "text": "Salesperson fired",
                    "data": [
                        "The person I was working with on this deal may have been fired. MAY have.",
                        "I sure hope they didn’t get fired, but something unforeseen happened.",
                        "I swear I did not get them fired. Maybe they still work there, but something changed."
                    ]
                },
                {
                    "text": "Customer site caught on fire",
                    "data": [
                        "Yikes. That would really be bad, right? I certainly don’t wish fire on anyone.",
                        "Fire is really the only reason I can think of for this deal bouncing.",
                        "Never yell fire in a movie theater ... or type it in your CRM. Just this once."
                    ]
                },
                {
                    "text": "Earthquake",
                    "data": [
                        "Something “unforeseen” happened and this deal is lost. Earthquake maybe?",
                        "The ground shook. The deal was lost. Maybe an earthquake? Maybe not.",
                        "The only thing that stopped this deal was an EARTHQUAKE. Or ... ?"
                    ]
                }
            ]
        },
    ]
};

function resetPan() {
    $("#resultBox").text("");
    $("#ext-pan-3").hide();
    $("#ext-pan-2").hide();
    $("#reason1").empty();
    $("<option value='' disabled selected>Select One</option>").appendTo("#reason1");
    for (var index = 0; index < text_data.data.length; index++) {
        $("<option value = " + index + " >" + text_data.data[index].reason1 + "</option>").appendTo("#reason1");
    }
    $("#reason2").empty();
    $("<option value='' disabled selected>Select One</option>").appendTo("#reason2");

    $("#ext-pan-1").show();


}
$(document).ready(function() {
    var url = location.host;
    if (!(url.indexOf("salesforce.com") >= 0 || url.indexOf(".force.com") >= 0))
        return;
    $("<div id = 'ext-pan'><div id = 'ext-pan-header' status='min'><p style='float: left;width: 100%;text-align: center;'>Loss Code Generator</p></div><div id='ext-pan-body' status='min'><div class = 'ext-pan-item' id = 'ext-pan-1'></div><div class = 'ext-pan-item' id = 'ext-pan-2'></div><div class = 'ext-pan-item' id = 'ext-pan-3'></div></div></div>").appendTo("body");
    $("#ext-pan-body").hide();
    $("<p>Lost reason:</p><select id='reason1'><option value='' disabled selected>Select One</option></select>").appendTo("#ext-pan-1");
    $("<p>Reasoning:</p><select id='reason2'><option value='' disabled selected>Select One</option></select>").appendTo("#ext-pan-2");

    $("<textarea id='resultBox' readonly></textarea><button id='copy-to-clipboard'>Copy to clipboard</button><button id='get-new-reason'>Get a new reason</button>").appendTo("#ext-pan-3");


    $("#ext-pan-header").click(function() {
        var status = $("#ext-pan-header").attr('status');
        if (status == 'min') {
            resetPan();
            $("#ext-pan-header").attr('status', 'max');
            $("#ext-pan-body").show('fast');
        } else {
            $("#ext-pan-header").attr('status', 'min');
            $("#ext-pan-body").hide('fast');
        }
    });

    $("#reason1").change(function() {
        var reason1 = $(this).children("option:selected").val();
        $("#reason2").empty();
        $("<option value='' disabled selected>Select One</option>").appendTo("#reason2");
        for (var index = 0; index < text_data.data[reason1].reason2.length; index++) {
            $("<option value = " + index + " >" + text_data.data[reason1].reason2[index].text + "</option>").appendTo("#reason2");
        }
        
        $("#ext-pan-2").show();
    });
    $("#reason2").change(function() {
        var reason1 = $("#reason1").children("option:selected").val();
        var reason2 = $(this).children("option:selected").val();
        var data = text_data.data[reason1].reason2[reason2].data;
        var random_Val = Math.floor((Math.random() * data.length));
        $("#resultBox").text(data[random_Val]);

        $("#ext-pan-1").hide();
        $("#ext-pan-2").hide();
        $("#ext-pan-3").show();
    });
    $("#copy-to-clipboard").click(function() {
        $("#resultBox").select();
        document.execCommand('copy');
    });
    $("#get-new-reason").click(function() {
        resetPan();
    });

});
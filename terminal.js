/*
 * terminal.js
 * ~~~
 * Custom JavaScript Code For Customizing JQuery Terminal
 */

// Array Of Commands
const commands = {
    // help - Displays a guiding message.
    help() {
        this.echo(
            "\nAvailable commands:\n" +
            "\n" +
            " * help           Display this message and exit.\n" +
            " * whoam          Display information about me.\n" +
            " * contactme      Display a message about how to contact me.\n" +
            " * github         Open my Github profile.\n" +
            " * repos          Show my Github repositories.\n" +
            " * clear          Clear terminal screen." +
            "\n"
        );
    },

    // whoam - Displays a message about who i am.
    whoam() {
        this.echo(
            "<br>👋 <strong>About me</strong><br>" +
            
            "<br>&nbsp;&nbsp;I'm a 16-year-old programmer with proficiency in" +
            "<br>&nbsp;&nbsp;Python and JavaScript. In addition to coding, I" +
            "<br>&nbsp;&nbsp;enjoy playing chess and exploring the exciting" +
            "<br>&nbsp;&nbsp;world of machine learning and computer science from" +
            "<br>&nbsp;&nbsp;the comfort of my own home." +


            "<br><br>🤠 <strong>My journey</strong><br>" +
            
            "<br>&nbsp;&nbsp;My journey in programming began four years ago," +
            "<br>&nbsp;&nbsp;and since then, I have expanded my skillset to" +
            "<br>&nbsp;&nbsp;encompass seven different programming languages." +
            "<br>&nbsp;&nbsp;With each language, I strive to not only master" +
            "<br>&nbsp;&nbsp;its syntax but also understand its underlying" +
            "<br>&nbsp;&nbsp;philosophy and principles." +
            "<br><br>&nbsp;&nbsp;Programming has become more than just a hobby for " +
            "<br>&nbsp;&nbsp;me; it's a passion that drives me to constantly" +
            "<br>&nbsp;&nbsp;learn and grow. Whether I'm working on personal" +
            "<br>&nbsp;&nbsp;projects or contributing to open source" + 
            "<br>&nbsp;&nbsp;initiatives, I take pride in writing clean," +
            "<br>&nbsp;&nbsp;efficient, and elegant code." +


            "<br><br>",
            { raw: true }
        );
    },

    // contactme - Displays a message about how to contact me.
    contactme() {
        this.echo(
            "<br>Woah, so you wanna contact me? then! here's my gmail -> <a href=\"ashkanfeyzollahi@gmail.com\"></a><br>", { raw: true }
        );
    }

    // github - Opens the Github profile URL of mine in a blank window.
    github() {
        open("https://github.com/AshkanFeyzollahi", "blank_");
    },

    // repos - Displays all my Github repositories.
    repos: async function() {
        this.echo("\n");

        const response = await fetch('https://api.github.com/users/AshkanFeyzollahi/repos');
        const data = await response.json();

        for (let nth_repo = 0; nth_repo < data.length; nth_repo++) {
            let repo = data[nth_repo].full_name;

            this.echo(`<strong><a href="https://github.com/${repo}">${nth_repo + 1}. ${repo}</a></strong>`, { raw: true });
            this.echo(`<p class="description">&nbsp;&nbsp;${data[nth_repo].description}</p>`, { raw: true });
            this.echo("\n");
        }
    }
};

// The message that sent when HTML body is loaded.
greetings = `Hey there!, I'm-
                        
 █████╗ ███████╗██╗  ██╗██╗  ██╗ █████╗ ███╗   ██╗    ███████╗███████╗██╗   ██╗███████╗ ██████╗ ██╗     ██╗      █████╗ ██╗  ██╗██╗
██╔══██╗██╔════╝██║  ██║██║ ██╔╝██╔══██╗████╗  ██║    ██╔════╝██╔════╝╚██╗ ██╔╝╚══███╔╝██╔═══██╗██║     ██║     ██╔══██╗██║  ██║██║
███████║███████╗███████║█████╔╝ ███████║██╔██╗ ██║    █████╗  █████╗   ╚████╔╝   ███╔╝ ██║   ██║██║     ██║     ███████║███████║██║
██╔══██║╚════██║██╔══██║██╔═██╗ ██╔══██║██║╚██╗██║    ██╔══╝  ██╔══╝    ╚██╔╝   ███╔╝  ██║   ██║██║     ██║     ██╔══██║██╔══██║██║
██║  ██║███████║██║  ██║██║  ██╗██║  ██║██║ ╚████║    ██║     ███████╗   ██║   ███████╗╚██████╔╝███████╗███████╗██║  ██║██║  ██║██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝
`

// Check if HTML body is ready
$(document).ready(function() {
    // Make HTML body a JQuery terminal
    $(document.body).terminal(commands, {
        greetings: greetings,
        prompt: "[ashkanfeyzollahi.github.io@guest] $ "
    });

    // Execute the command 'help' when HTML is ready.
    $(document.body).terminal().exec('help');
});


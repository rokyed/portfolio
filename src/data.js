/**
 @TODO
 1.build the different views
 2.create the links between different views
 3.start adding data and beautify the whole
 4.TBD

*/

window['portfolio-data'] = {
    menu: [{
        actionName: 'home',
        label: 'Home',
        iconCls: 'icon-vcard',
    },{
        actionName: 'projects',
        iconCls: 'icon-picture',
        label: 'Projects',
    },{
        actionName: 'articles',
        iconCls: 'icon-docs ',
        label: 'Articles',
    },{
        actionName: 'direction-linkedin',
        label: 'LinkedIn',
        iconCls: 'icon-linkedin-rect',
        href: 'https://www.linkedin.com/in/andrei-bazavan-a388a0112'
    }],

    views: [{
        definition: 'projects',
        itemsDefinition: 'project',
        label: 'Projects',
        viewDefinition: 'show-case-glimpse'
    },{
        definition: 'home',
        itemsDefinition: 'home',
        label: 'Home',
        viewDefinition: 'home'
    },{
        definition: 'articles',
        itemsDefinition: 'article',
        label: 'Articles',
        viewDefinition: 'article'
    }],

    items: [{
        definition: 'home',
        title: 'Home',
        description: [
            '<hr>',
            '<p>',
                'Who are you?',
            '</p>',
            '<br>',
            '<p>',
                'My name is Andrei Bazavan. If you are willing to see my experience please go to my LinkedIn page. In the menu the LinkedIn button.',
            '</p>',
            '<div class="v-me-image"></div>',
            '<hr>',
            '<p>',
                'What made you do programming?',
            '</p>',
            '<br>',
            '<p>',
                'When I was 13 - 14 years old, for first time in my life seen Visual Studio 6.0 at my uncle, he was building some accounting software. That amazed me, the fact that we can create stuff that we can use and ease our lives at basic tasks. Self-taught, programming was an adventure, a nice one. Always fun and innovative, it is always inspiring. It\'s like an endless TV show, where always new and whacky things happen. Programming has made me know my friends, has made me have awesome friends.',
            '</p>',
            '<hr>',
            '<p>',
                'What you value the most?',
            '</p>',
            '<br>',
            '<p>',
                'I value the knowledge and the willing to share that knowledge. Evolving together sounds better and is better than evolving alone. The main key to our existence and helping our environment is knowledge. Internet is the biggest book of knowledge made and known by humanity.',
            '</p>',
            '<hr>',
            '<p>',
                'What do you do as a hobby?',
            '</p>',
            '<br>',
            '<p>',
                'I proudly do the same thing as my work. Programming is fun!!',
            '</p>',
            '<hr>',
            '<p>',
                'What shall I do next?',
            '</p>',
            '<br>',
            '<p>',
                'Please use the menu, since it\'s the way to navigate this portfolio.',
            '</p>',
            '<hr>',
            '<p>',
                'The end.',
            '</p>'
        ].join('')
    },{
        definition: 'project',
        title: 'tomGallery',
        urlname: 'tomgallery',
        description: 'Tom gallery is a simple yet nice piece of programming art. Building it was nice and fun, also challenging.',
        url: 'http://rokyed.github.io/tomGallery/',
        urlIconCls:'icon-github-circled-1',
        thumbImage: 'ressources/images/thumbs/tomGallery.png',
        image: 'ressources/images/full/tomGallery.png'
    },{
        definition: 'project',
        title: 'cocoChanelJS',
        urlname: 'cocochaneljs',
        description: [
            'Knowing there are very expensive tools to design websites.',
            'I took it as a challenge to build an app that\'s able to',
            'build web designs in an web environment. This makes very easy to',
            'build and view directly in browser the results.'
        ].join(' '),
        url: 'http://rokyed.github.io/cocoChanelJS/',
        urlIconCls: 'icon-github-circled-1',
        thumbImage: 'ressources/images/thumbs/cocochaneljs.png',
        image: 'ressources/images/full/cocochaneljs.png'
    },{
        definition: 'project',
        title: 'Cube-Placer (sokoban)',
        urlname: 'cubeplacer',
        description: 'This game was built in about 2 weeks, including all the graphics. It was built with Unity 3D game engine.',
        url: 'https://play.google.com/store/apps/details?id=com.ens.cubePlacer&hl=en',
        urlIconCls:'icon-right-circle',
        thumbImage: 'ressources/images/thumbs/cube-placer.png',
        image: 'ressources/images/full/cube-placer.jpg'
    },{
        definition: 'project',
        title: 'TouchMania',
        urlname: 'touchmania',
        description: 'This game was challenging and fun. Making an unidimensional array react like a 2 dimensional array.',
        url: 'https://play.google.com/store/apps/details?id=noComAB.games.touchMania&hl=en',
        urlIconCls:'icon-right-circle',
        thumbImage: 'ressources/images/thumbs/touchmania.png',
        image: 'ressources/images/full/touchmania.png'
    },{
        definition: 'project',
        title: 'takaraKeyframer',
        urlname: 'takarakeyframer',
        description: [
            'Is a simple library that\'s able to animate DOM elements, canvases, sounds...',
            ' everything that\'s controllable in JavaScript.'
        ].join(' '),
        url: 'https://github.com/rokyed/takaraKeyframer',
        urlIconCls:'icon-github-circled-1',
    },{
        definition: 'project',
        title: 'hypercoreJS',
        urlname: 'hypercorejs',
        description: [
            'It\'s a class management system, that allows developer to: define, extend, override, mixin and instantiate classes,',
            'also supports singletones.<br>',
            'hypercoreJS it\'s at the base of this portfolio website, it drives everything that\'s on the screen and more. It is',
            'inspired from Sencha Touch, yet it has nothing in common with it. This was an experiment but was a successful one.<br>',
            'The class management system comes with a loader that will insure the deferred loading of all the classes',
            'and will take care of their definition and instantiation, also it has an callback for the developer to do whatever he wishes with.'
        ].join(' '),
        url: 'https://github.com/rokyed/hypercorejs',
        urlIconCls:'icon-github-circled-1',
    },{
        definition: 'article',
        title: 'Which language is the best?',
        description: [
            'Many people ask:',
            '<b>',
                'Which language is the best?',
            '</b>',
            'or',
            '<b>',
                'What is better C# or Java?',
            '</b>',
            '<br>',
            '<br>',

            'My answer is somewhat simple.',
            '<br>',
            '<br>',

            'What defines a language? Well... language is a tool used by a programmer to achieve what he wants to achieve.',
            '<br>',
            '<br>',

            'How many people perceive different languages? C++ is fast, Java is compatible, JavaScript is for web.',
            '<br>',
            '<br>',

            'What many don\'t realise is that almost all programming languages are similar.',
            '<br>',
            '<br>',

            'Now let\'s go far away from programming domains. For example, a carpenter.',
            'A carpenter can use a hand saw or a circular saw or any other similar tool.',
            'At the base it consists in cutting that wood piece in the shape desired.',
            'A hand saw will do the same job as the circular saw but slower.',
            '<br>',
            '<br>',

            'Let\'s consider hand saw is C++ and circular saw is JavaScript.',
            'The same principle applies for both, the way to use them is different yet the result will be somewhat similar.',
            '<br>',
            '<br>',

            'Now you might be thinking: <b>Wait a bit Andrei this is not that easy to represent it!</b>,',
            'I totally agree, but what i am trying to explain is that you should not be constrained by the tool you use,',
            'but more by your imagination. When I find a solution for a current problem, I do it logically, without any code.',
            'Because, when I got the algorithm sorted out for that specific problem,',
            'it becomes very easy to implement it in any kind of language.',
            'Hence the language is just a tool and has little to no infulence upon my algorithm.',
            '<br>',

            '<br>',
            'Like you I always wondered why teachers are teaching us pseudo code. This is the reason.',
            'They are forcing us to abstract from a tangible language.',
            '<br>',
            '<br>',

            'I learned programming like most of you, the hard way and it took time until I understood this concept.',
            'As soon as I got this concept, programming languages were no more barriers but just tools.',

            '<br>',
            '<br>',
            'So next time you are willing to learn a language, start by learning the logic behind all programming languages,',
            'which is similar and make yourself a logic diagram, it doens\'t need to be pretty, just useful for you.',

            '<br>',
            '<br>',
            'Good luck and happy programming.'
        ].join(' '),
        createdOn: '24-11-2015'
    }],
    defaultPage: 'home'
};

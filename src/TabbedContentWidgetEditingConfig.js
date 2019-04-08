import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('TabbedContentWidget', {
    title: 'Tabbed Content',
    attributes: {
        items: {
            title: 'Content',
        },

    },
    properties: [
        'items',

    ],
});
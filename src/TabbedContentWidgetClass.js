import * as Scrivito from 'scrivito';

const TabbedContentWidget = Scrivito.provideWidgetClass('TabbedContentWidget', {
    attributes: {
        items: ['widgetlist', { only: 'TabbedContentItemWidget' }],

    },
});

export default TabbedContentWidget;
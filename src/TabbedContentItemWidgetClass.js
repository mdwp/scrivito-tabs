import * as Scrivito from 'scrivito';

const TabbedContentItemWidget = Scrivito.provideWidgetClass('TabbedContentItemWidget', {
    onlyInside: 'TabbedContentWidget',
    attributes: {
        title: 'string',
        text: 'html',
        tags: 'stringlist',
    },
});

export default TabbedContentItemWidget;
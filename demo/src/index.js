import React from 'react'
import times from 'lodash/times'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'
import AttachmentField from '../../src'

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const Cell = ({children}) => (
    <div
        className={css`
            width: 240px;
            height: 22px;
        `}
    >
        {children}
    </div>
)

class Demo extends React.Component {
    render() {
        return <div>
            <h1>AttachmentField Demo</h1>
            <p>Used for (pre)viewing and organizing a list of attachments.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for previewing small thumbnails of the attachments in a record gallery card</p>
            <h5>6 pictures</h5>
            <Viewport>
                <Cell>
                    <AttachmentField
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        attachments={times(6).map(i => ({
                            id: `${i}`,
                            mimeType: 'image/jpeg',
                            filename: `Image ${i + 1}`,
                            thumbnails: {
                                small: {
                                    url: `https://lorempixel.com/300/200/nature?=${i}`
                                },
                                medium: {
                                    url: `https://lorempixel.com/300/200/nature?=${i}`
                                },
                                large: {
                                    url: `https://lorempixel.com/300/200/nature?=${i}`
                                },
                            },
                            url: `https://lorempixel.com/300/200/nature?=${i}`
                        }))}
                    />
                </Cell>
            </Viewport>
            <h5>
                Mixed attachments
            </h5>
            <Viewport>
                <Cell>
                    <AttachmentField
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        attachments={[{
                            id: '1',
                            mimeType: 'video/ogg',
                            filename: 'Video',
                            thumbnails: null,
                            url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                        }, {
                            id: '2',
                            mimeType: 'audio/mpeg',
                            filename: 'Audio',
                            thumbnails: null,
                            url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                        }, {
                            id: '3',
                            mimeType: 'image/jpeg',
                            filename: `Image`,
                            thumbnails: {
                                small: {
                                    url: 'https://lorempixel.com/300/200/nature'
                                },
                                medium: {
                                    url: 'https://lorempixel.com/300/200/nature'
                                },
                                large: {
                                    url: 'https://lorempixel.com/300/200/nature'
                                },
                            },
                            url: 'https://lorempixel.com/300/200/nature'
                        }, {
                            id: '4',
                            mimeType: 'image/gif',
                            filename: 'GIF',
                            thumbnails: {
                                small: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                medium: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                large: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                            },
                            url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                        }]}
                    />
                </Cell>
            </Viewport>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for uploading / removing / previewing / reordering attachments in a record detail.</p>
            <h4>
                Editor role
            </h4>
            <h5>No attachments</h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                />
            </Viewport>
            <h5>30 images (image/jpeg)</h5>
            <ul>
                <li>
                    Should show 'show more' button after more than 4 rows
                </li>
            </ul>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={times(30).map(i => ({
                        id: `${i}`,
                        mimeType: 'image/jpeg',
                        filename: `Image ${i + 1}`,
                        thumbnails: {
                            small: {
                                url: `https://lorempixel.com/300/200/nature?=${i}`
                            },
                            medium: {
                                url: `https://lorempixel.com/300/200/nature?=${i}`
                            },
                            large: {
                                url: `https://lorempixel.com/300/200/nature?=${i}`
                            },
                        },
                        url: `https://lorempixel.com/300/200/nature?=${i}`
                    }))}
                />
            </Viewport>
            <h5>GIF (image/gif)</h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        mimeType: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            medium: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            large: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h5>
                Audio (audio/mpeg)
            </h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        mimeType: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }]}
                />
            </Viewport>
            <h5>
                Video (video/mp4)
            </h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/mp4',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.mp4'
                    }]}
                />
            </Viewport>
            <h5>
                Video (video/mp4)
            </h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }]}
                />
            </Viewport>
            <h5>
                Mixed
            </h5>
            <Viewport>
                <AttachmentField
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }, {
                        id: '2',
                        mimeType: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }, {
                        id: '3',
                        mimeType: 'image/jpeg',
                        filename: `Image`,
                        thumbnails: {
                            small: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                            medium: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                            large: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                        },
                        url: 'https://lorempixel.com/300/200/nature'
                    }, {
                        id: '4',
                        mimeType: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            medium: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            large: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h5>
                Loading attachment previews
            </h5>
            <h5>
                Preview overlay
            </h5>
            <h5>
                Uploading
            </h5>
            <h5>
                Drag and drop
            </h5>
            <h5>
                Read only
            </h5>
            <h5>
                Inline
            </h5>
            <h5>
                Expanded
            </h5>
            <h5>
                Error not found
            </h5>
            <h5>
                Image loading indicator
            </h5>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))

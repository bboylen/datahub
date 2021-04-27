import React from 'react';
import { List, Typography, Divider } from 'antd';
import styled from 'styled-components';

import { EntityType } from '../../../types.generated';
import { useEntityRegistry } from '../../useEntityRegistry';
import { PreviewType } from '../Entity';

type Props = {
    ownerships: { [key in EntityType]?: any[] };
    entityPath?: string;
};

const ListContainer = styled.div`
    display: default;
    flex-grow: default;
`;

const TitleContainer = styled.div`
    margin-bottom: 30px;
`;

const ListItem = styled.div`
    margin: 40px;
`;

export default ({ ownerships, entityPath }: Props) => {
    const entityRegistry = useEntityRegistry();

    // Switched from const to let *temporary?
    let entityType = entityRegistry.getTypeFromPathName(entityPath || '');

    // Need to check what getTypeFromPathName does, seems to return some sort of nonstring object. Entitytype can not be set as a string. 

    // if (!entityType) return null;
    if (!entityType) {
        entityType = Object.keys(ownerships)[0];
    }
    const entitiesToShow = ownerships[entityType] || [];
    console.log(ownerships);
    console.log(entityType);
    // console.log(entitiesToShow);

    return (
        <ListContainer>
            <TitleContainer>
                <Typography.Title level={3}>{entityRegistry.getCollectionName(entityType)} owned</Typography.Title>
                <Divider />
            </TitleContainer>
            <List
                dataSource={entitiesToShow}
                renderItem={(item) => {
                    return (
                        <ListItem>
                            {entityRegistry.renderPreview(entityType, PreviewType.PREVIEW, item.entity)}
                            <Divider />
                        </ListItem>
                    );
                }}
            />
        </ListContainer>
    );
};

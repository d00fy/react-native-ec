import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button,
} from 'native-base';
export default class ListThumbnailExample extends Component {
    state = { data: [] };
    componentWillMount() {
        return fetch(
            'https://asia-northeast1-react-native-shopping-c6cb4.cloudfunctions.net/products'
        )
            .then(response => response.json())
            .then(responseJson =>
                this.setState({
                    data: responseJson.data,
                    name: responseJson.name,
                })
            )
            .catch(error => {
                console.error(error);
            });
    }

    mapCreate() {
        return this.state.data.map(certain => (
            <List key={certain.name}>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail square source={{ uri: 'Image URL' }} />
                    </Left>
                    <Body>
                        <Text>{certain.name}</Text>
                        <Text note numberOfLines={1}>
                            {certain.price}円
                        </Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>
            </List>
        ));
    }

    render() {
        return (
            <Container>
                <Content>{this.mapCreate()}</Content>
            </Container>
        );
    }
}

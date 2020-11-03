import React from 'react';
import styled from 'styled-components/native';
import storage from '../net/storage';
import { withContext } from 'context-q';
import moment from 'moment';

const Image = styled.Image`
    width:100%; height:360px;
`;

const Block = styled.View`
  padding:15px 15px 0;
`;
const Tags = styled.Text`
    font-size:16px;
`;
const Date = styled.Text`  
  color:#aaa;
  font-size:14px;  
`;

function Component(props) {
    const [item, setItem] = React.useState(null);
    React.useEffect(()=> {
        storage.readById( props.route.params.id )
            .then( data => setItem( data ));
    },[]);

  return (
      <>
      { item && (
          <>
            <Image source={{uri:item.url}} />
            <Block>
              <Tags>{item.hashtags}</Tags>
            </Block>
            <Block>
            {props.context.showDate && (
              <Date>{moment(item.id, 'x').format('YYYY-MM-DD')}</Date>
            )}
            </Block>
          </>
      )}
      </>
  );
}

Component = withContext(Component);
export default Component;

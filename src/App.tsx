import { useEffect } from 'react';
import { Layout, Button, Card, Typography, Space } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import Share from './Components/Share';
import useFetchAdvice from './hooks/useFetchAdvice';

const { Content, Footer } = Layout;
const { Text } = Typography;

const App = () => {
  const {data, fetchAdvice} = useFetchAdvice();

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <Layout className="layout">
      <Content className="content">
        <Space direction="vertical" size="large" align="center" className="space-container">
          <Card className="advice-card" loading={data.loading} bordered={false}>
            <Text>{data.advice}</Text>
          </Card>
          <Share advice={data.advice}/>
          <Button
            type="primary"
            icon={<BulbOutlined />}
            disabled={data.loading}
            size="large"
            onClick={() => fetchAdvice()}
            className="advice-button"
          >
            Get Random Advice
          </Button>
        </Space>
      </Content>
      <Footer className="footer">Advice App ©2024 Created by IT</Footer>
    </Layout>
  );
};

export default App;

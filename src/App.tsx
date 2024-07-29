import { useState } from 'react';
import { Layout, Button, Card, Typography, Space } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import './App.css';
import Share from './Components/Share';

const { Content, Footer } = Layout;
const { Text } = Typography;

const App = () => {
  const [advice, setAdvice] = useState('Click the button to get a piece of advice.');
  const [loading, setLoading] = useState(false);

  const getRandomAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice('Failed to fetch advice. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Layout className="layout">
      <Content className="content">
        <Space direction="vertical" size="large" align="center" className="space-container">
          <Card className="advice-card" loading={loading} bordered={false}>
            <Text>{advice}</Text>
          </Card>
          <Share />
          <Button
            type="primary"
            icon={<BulbOutlined />}
            size="large"
            onClick={getRandomAdvice}
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

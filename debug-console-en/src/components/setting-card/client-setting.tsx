import React from 'react';
import { SettingContainer } from '../common/setting-container';
import { SettingForm } from '../common/setting-form';
import { FormButton } from '../common/button';
import { Form, Tag } from 'antd';
import { DEFAULT_RTM_CONFIG } from '../../common/constants';

interface ClientSettingProps {
  update: (info: any, isReset?: boolean) => void;
}

export const ClientSetting: React.FC<ClientSettingProps> = ({ update }) => {
  const [form] = Form.useForm();

  const resetClient = () => {
    form.setFieldsValue(DEFAULT_RTM_CONFIG);
    update(DEFAULT_RTM_CONFIG, true);
  };

  const updateClient = () => {
    update(form.getFieldsValue());
  };
  return (
    <SettingContainer title={'Client Settings'}>
      <SettingForm
        form={form}
        initialValues={DEFAULT_RTM_CONFIG}
        formItemLayout={{ labelCol: { span: 14 }, wrapperCol: { span: 8 } }}
        formItems={[
          {
            label: 'APP ID',
            name: 'appId',
            type: 'input',
            props: { width: 152, type: 'password' },
          },
          {
            label: 'APP Certificate',
            type: 'switch',
            name: 'appCertificate',
            props: { disabled: true },
          },
          {
            label: 'Project Stage',
            type: 'custom',
            name: 'process',
            component: <Tag>Testing Stage</Tag>,
          },
          { label: 'Client-side Encryption', type: 'switch', name: 'encrypt' },
          { label: 'CloudProxy', type: 'switch', name: 'cloudProxy' },
          {
            label: 'Presence Timeout',
            type: 'input',
            name: 'presenceTimeout',
            props: { width: 152, type: 'number' },
          },
          {
            label: 'Log Level',
            name: 'logLevel',
            type: 'select',
            props: {
              width: 152,
              options: [
                { label: 'DEBUG', value: 'debug' },
                { label: 'INFO', value: 'info' },
                { label: 'WARN', value: 'warn' },
                { label: 'ERROR', value: 'error' },
                { label: 'NONE', value: 'none' },
              ],
            },
          },
        ]}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FormButton onClick={updateClient}>Update Client</FormButton>
        <FormButton onClick={resetClient}>Reset All Clients</FormButton>
      </div>
    </SettingContainer>
  );
};

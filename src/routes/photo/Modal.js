import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      // data.address = data.address.join(' ')
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="Title" hasFeedback {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: item.title,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Author" hasFeedback {...formItemLayout}>
          {getFieldDecorator('author', {
            initialValue: item.author,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Status" hasFeedback {...formItemLayout}>
          {getFieldDecorator('status', {
            initialValue: item.status,
            rules: [
              {
                required: true,
              },
            ],
          })(
            <Radio.Group>
              <Radio value={ 0 }>正常</Radio>
              <Radio value={ 1 }>禁用</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="ImgUrl" hasFeedback {...formItemLayout}>
          {getFieldDecorator('imgUrl', {
            initialValue: item.imgUrl,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Comment" hasFeedback {...formItemLayout}>
          {getFieldDecorator('comment', {
            initialValue: item.comment,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        {/*<FormItem label="E-mail" hasFeedback {...formItemLayout}>*/}
          {/*{getFieldDecorator('email', {*/}
            {/*initialValue: item.email,*/}
            {/*rules: [*/}
              {/*{*/}
                {/*required: true,*/}
                {/*pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,*/}
                {/*message: 'The input is not valid E-mail!',*/}
              {/*},*/}
            {/*],*/}
          {/*})(<Input />)}*/}
        {/*</FormItem>*/}
        {/*<FormItem label="Address" hasFeedback {...formItemLayout}>*/}
          {/*{getFieldDecorator('address', {*/}
            {/*initialValue: item.address && item.address.split(' '),*/}
            {/*rules: [*/}
              {/*{*/}
                {/*required: true,*/}
              {/*},*/}
            {/*],*/}
          {/*})(<Cascader*/}
            {/*size="large"*/}
            {/*style={{ width: '100%' }}*/}
            {/*options={city}*/}
            {/*placeholder="Pick an address"*/}
          {/*/>)}*/}
        {/*</FormItem>*/}
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)

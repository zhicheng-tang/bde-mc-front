import {
    CarrierRender,
    ClientRender,
    DeliveryTypeRender,
    TransportationTypeRender,
    TransportStatusRender,
} from '../../../components/form';
import React from "react";

export default [
    {
        dataIndex: 'clientName',
        title: '客户',
        width: 100,
        fixed: 'left',
    },
    {
        dataIndex: 'orderDate',
        title: '订单日期',
        width: 160,
        fixed: 'left',
    },
    {
        dataIndex: 'transportationType',
        title: '运输类型',
        width: 100,
        fixed: 'left',
        render: TransportationTypeRender,
    },
    {
        dataIndex: 'waybillNumber',
        title: '运单号',
        width: 120,
        fixed: 'left',
    },
    {
        dataIndex: 'originNumber',
        title: '来源单号',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'status',
        title: '运输状态',
        width: 90,
        render: TransportStatusRender,
    },
    {
        dataIndex: 'packageQty',
        title: '包裹件数',
        width: 90,
    },
    {
        dataIndex: 'itemQty',
        title: '商品数量',
        width: 90,
        ellipsis: true,
    },
    {
        dataIndex: 'weight',
        title: '重量',
        width: 90,
        ellipsis: true,
    },
    {
        dataIndex: 'requireInsurance',
        title: '购买保险',
        width: 90,
        render: (text) => (
            <a>
                {text?'是':'否'}
            </a>
        ),
    },
    {
        dataIndex: 'cargoValue',
        title: '货物价值',
        width: 90,
    },
    {
        dataIndex: 'itemDescription',
        title: '货物描述',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'deliveryType',
        title: '送货方式',
        width: 100,
        render: DeliveryTypeRender,
    },
    {
        dataIndex: 'requestedProductName',
        title: '选择产品',
        width: 100,
    },
    {
        dataIndex: 'transportationAmount',
        title: '预估运费',
        width: 90,
    },
    {
        dataIndex: 'insuranceAmount',
        title: '预估保险费',
        width: 90,
    },
    {
        dataIndex: 'toUpstairsAmount',
        title: '预估上楼费',
        width: 90,
    },
    {
        dataIndex: 'totalAmount',
        title: '预估总运费',
        width: 90,
    },
    {
        dataIndex: 'fromStoreName',
        title: '发货门店',
        width: 200,
        ellipsis: true,
    },
    {
        dataIndex: 'fromProvince',
        title: '发货省',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'fromCity',
        title: '发货城市',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'fromArea',
        title: '发货区县',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'fromAddress',
        title: '发货地址',
        width: 300,
        ellipsis: true,
    },
    {
        dataIndex: 'fromContactMan',
        title: '发货人',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'fromContactPhone',
        title: '发货人电话',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'toStoreName',
        title: '收货门店',
        width: 200,
        ellipsis: true,
    },
    {
        dataIndex: 'toProvince',
        title: '收货省',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'toCity',
        title: '收货城市',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'toArea',
        title: '收货区县',
        width: 120,
        ellipsis: true,
    },
    {
        dataIndex: 'toAddress',
        title: '收货地址',
        width: 300,
        ellipsis: true,
    },
    {
        dataIndex: 'toContactMan',
        title: '收货人',
        width: 120,
    },
    {
        dataIndex: 'toContactPhone',
        title: '收货人电话',
        width: 120,
    },
    {
        dataIndex: 'consignProductName',
        title: '发运产品',
        width: 100,
    },
    {
        dataIndex: 'consignmentNumber',
        title: '托运单号',
        width: 150,
    },
    {
        dataIndex: 'consignTime',
        title: '发运时间',
        width: 160,
    },
    {
        dataIndex: 'lastTrackTime',
        title: '最后跟踪操作时间',
        width: 160,
        ellipsis: true,
    },
    {
        dataIndex: 'lastTrackMessage',
        title: '最后跟踪信息',
        width: 300,
        ellipsis: true,
    },
    {
        dataIndex: 'collectedTime',
        title: '揽收时间',
        width: 160,
    },
    {
        dataIndex: 'collectedPackageQty',
        title: '揽收件数',
        width: 90,
    },
    {
        dataIndex: 'collectedBy',
        title: '揽收人',
        width: 90,
        ellipsis: true,
    },
    {
        dataIndex: 'deliveryTime',
        title: '派送时间',
        width: 160,
        ellipsis: true,
    },
    {
        dataIndex: 'deliveryMan',
        title: '派送人',
        width: 90,
        ellipsis: true,
    },
    {
        dataIndex: 'signedTime',
        title: '签收时间',
        width: 160,
        ellipsis: true,
    },
    {
        dataIndex: 'signedBy',
        title: '签收人',
        width: 90,
        ellipsis: true,
    },
    {
        dataIndex: 'createdBy',
        title: '创建人',
        width: 120,
    },
    {
        dataIndex: 'createdTime',
        title: '创建时间',
        width: 160,
        sorter: true,
    },
    {
        dataIndex: 'remark',
        title: '发货备注',
        width: 300,
        ellipsis: true,
    },
];

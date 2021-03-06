import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'
import Page from '../Page'
import load from '../../helpers/load'

const ListBuilderDisplayView = load('ListBuilderDisplayView')
const ListBuilderEditorView = load('ListBuilderEditorView')
const RankedList = load('RankedList')
const EqualsList = load('EqualsList')

export default function RouterListBuilder() {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Page path={`${path}/ranked`} active={['LIST_BUILDER', 'RANKED_LIST']}>
        <RankedList />
      </Page>
      <Page path={`${path}/equals`} active={['LIST_BUILDER', 'EQUALS_LIST']}>
        <EqualsList />
      </Page>
      <Page
        path={`${path}/:listId/display`}
        active={['LIST_BUILDER', 'DISPLAY']}
      >
        <ListBuilderDisplayView />
      </Page>
      <Page path={`${path}/:listId`} active={['LIST_BUILDER', 'EDITOR']}>
        <ListBuilderEditorView />
      </Page>
      <Page path={path} active={['LIST_BUILDER', 'EDITOR']}>
        <ListBuilderEditorView />
      </Page>
    </Switch>
  )
}

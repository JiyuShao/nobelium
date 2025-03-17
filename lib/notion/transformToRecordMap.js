export const transformToRecordMap = (post, blocks) => {
  let newCollection = {
    [post.id]: {
      role: 'reader',
      value: {
        id: post.id,
        type: 'page',
        content: blocks.map(block => block.id)
      }
    }
  }
  const newBlocks = blocks.reduce((result, block) => {
    result[block.id] = {
      role: 'reader',
      value: { ...block, parent_id: block.parent.page_id }
    }
    return result
  }, { [post.id]: newCollection[post.id] })
  return {
    collection: newCollection,
    block: newBlocks
  }
}

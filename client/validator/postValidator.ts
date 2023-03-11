import { check, checkSchema } from "express-validator";

export const createPostValidator = checkSchema({
    title: {
        trim: true,
        notEmpty: true,
        isString: true,
        errorMessage: 'Title is required'
    },
    content: {
        trim: true,
        notEmpty: true,
        isString: true,
        errorMessage: 'Content is required'
    },
    category: {
        trim: true,
        notEmpty: true,
        isString: true,
        errorMessage: 'Category is required'
    },
    published: {
        notEmpty: true,
        isBoolean: true,
        errorMessage: 'Published is required'
    },
    image: {
        trim: true,
        notEmpty: true,
        isString: true,
        errorMessage: 'Title is required'
    }
});

export const getPostValidator = checkSchema({
    postId: {
        in: ['params'],
        trim: true,
        notEmpty: true,
        escape: true,
        errorMessage: 'Post Id is required'
    },
})

export const updatePostValidator = checkSchema({
    postId: {
        in: ['params'],
        trim: true,
        notEmpty: true,
        escape: true,
        errorMessage: 'Post Id is required'
    },
    title: {
        trim: true,
        optional: true,
        isString: true,
    },
    content: {
        trim: true,
        optional: true,
        isString: true,
    },
    category: {
        trim: true,
        optional: true,
        isString: true,
    },
    published: {
        optional: true,
        isBoolean: true,
    },
    image: {
        trim: true,
        optional: true,
        isString: true,
    }
})

export const deletePostValidator = checkSchema({
    postId: {
        in: ['params'],
        trim: true,
        notEmpty: true,
        escape: true,
        errorMessage: 'Post Id is required'
    },
})

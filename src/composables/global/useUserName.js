/**
 * We need to decide which to use as the short name to be displayed in
 * the avatar when there is no avatar.
 * @param {Object{
 *      nickname?: String,
 *      realname?: String,
 *      email: String,
 *      is_anonymous: Boolean
 *      id: String | Number
 * }} userProfile
 * 
 * @returns {String}
 */
export default (userProfile) => {
    const { nickname, realname, email, is_anonymous, id } = userProfile
    if (nickname) { // if we have a nickname, then use it
        return nickname
    } else if (realname && !is_anonymous) { // if we have a realname and not anonymous, then use it
        return realname
    } else if (id) { // if we have user id, then use `User_${id}`
        return `User_${id}`
    } else { // otherwise, use the email
        return email
    }
}
#include "unity.h"
#include <stdlib.h>
#include <stdint.h>
#include "mock_stub_sodium.h"
#include "mock_stub_crypt4gh.h"
#include "mock_stub_unistd.h"
#include "mock_stub_ftw.h"
#include "upcommon.h"
#include "uptypes.h"

void setUp() {}
void tearDown() {}

void test_create_keypair_should_return_a_keypair(void)
{
    crypto_kx_keypair_ExpectAnyArgs();

    KEYPAIR *ret = create_keypair();

    TEST_ASSERT_NOT_EQUAL(ret, NULL);
    free(ret);
}

void test_free_keypair_should_succeed(void)
{
    KEYPAIR *t = calloc(sizeof(KEYPAIR), 1);
    free_keypair(t);
}

void test_get_keypair_public_key_should_return_public_key(void)
{
    KEYPAIR *kp = calloc(sizeof(KEYPAIR), 1);

    void *ret = get_keypair_public_key(kp);

    TEST_ASSERT_EQUAL(ret, kp->public);
    free(kp);
}

void test_nftwremove_should_call_unlink_for_files(void)
{
    unsigned char tpath[10] = "test-path";
    unlink_ExpectAndReturn(tpath, 1);
    int ret = nftwremove(tpath, NULL, 2, NULL);
    TEST_ASSERT(ret);
}

void test_nftwremove_should_ignore_other_than_files(void)
{
    unsigned char tpath[10] = "test-path";
    int ret = nftwremove(tpath, NULL, 0, NULL);
    TEST_ASSERT(!ret);
}

void test_rmrecv_should_call_nftw(void)
{
    unsigned char tpath[10] = "test-path";
    nftw_ExpectAndReturn(tpath, &nftwremove, 5, 0, 0);
    int ret = rmrecv(tpath);
    TEST_ASSERT(!ret);
}
